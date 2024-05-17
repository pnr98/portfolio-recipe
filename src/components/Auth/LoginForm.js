import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { Container, Wrapper, Form, Title, Input, SignLink, Error } from "../Auth/Auth.Styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/login";
import GitHubButton from "./GithubBtn";

const errorType = {
    "auth/invalid-credential": "가입되지 않은 이메일이거나, 비밀번호가 틀렸습니다.",
}

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const onChange = (e) => {
        const {name, value} = e.target;
        if(name === "email") {
            setEmail(value)
        } else if(name ==="password") {
            setPassword(value)
        } 
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("")
        if(isLoading || email === "" || password === "") return;
        try{
            setIsLoading(true)
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const accessToken = await user.getIdToken() // 액세스 토큰은 보안상의 이유로 메서드를 통해 접근
            const refreshToken = user.refreshToken
            const userId = user.uid
            // 로그인 성공 시 redux 액션 디스패치; 상태 업데이트
            dispatch(login({isLoggedIn: true, accessToken, refreshToken, userId}))
            navigate("/home")
            // console.log(userCredential)
        } catch (e) {
            if(e instanceof FirebaseError) {
                console.log(e.code ,e.message)
                if(e.code in errorType) {
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
                    <Input name="email" placeholder="Email" type="email" onChange={onChange} required/>
                    <Input name="password" placeholder="Password" type="password" onChange={onChange} required/>
                    <Input type="submit" value={isLoading ? "Loading..." : "로그인"}/>
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