import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { Container, Wrapper, Form, Title, Input, SignLink, Error, CheckBox, CheckboxLabel } from "../Auth/Auth.Styled";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/login";
import { handleLogin } from "../../utils/handleLogin";
import GitHubButton from "./GithubBtn";

const errorType = {
    "auth/invalid-credential": "가입되지 않은 이메일이거나, 비밀번호가 일치하지 않습니다.",
}

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [stayLogin, setStayLogin] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onCheck = (e) => {
        setStayLogin(e.target.checked)
    }

    // 폼 제출
    const onSubmit = async (e) => {
        e.preventDefault();
        setError("")
        if (isLoading || email === "" || password === "") return;
        try {
            setIsLoading(true)
            // 체크박스를 선택하면 브라우저를 닫았다가 다시 열어도 로그인 유지 : 아니면, 브라우저를 새로고침할때만 유지
            const persistence = stayLogin ? browserLocalPersistence : browserSessionPersistence;
            await setPersistence(auth, persistence);
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            await handleLogin(user, dispatch)
            navigate("/home")
        } catch (e) {
            if (e instanceof FirebaseError) {
                console.log(e.code, e.message)
                if (e.code in errorType) {
                    setError(errorType[e.code])
                }
            } else {
                setError("로그인에 실패했습니다. 다시 시도해주세요.");
            }
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>로그인</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="email" placeholder="Email" type="email" onChange={onChange} required />
                    <Input name="password" placeholder="Password" type="password" onChange={onChange} required />
                    <CheckboxLabel>
                        <CheckBox type="checkbox" name="stayLogin" checked={stayLogin} onChange={onCheck} />
                        로그인 유지
                    </CheckboxLabel>
                    <Input type="submit" value={isLoading ? "Loading..." : "로그인"} />
                </Form>
                {error !== "" ? <Error>{error}</Error> : null}
                <SignLink>계정이 없으신가요?{" "}
                    <Link to='/sign-up'>회원가입</Link>
                </SignLink>
                <GitHubButton />
            </Wrapper>

        </Container>
    )

}