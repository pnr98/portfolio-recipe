import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Link } from "react-router-dom";
import { Container, Wrapper, Form, Title, Input, SignLink, Error } from "../Auth/Auth.Styled";
import { useDispatch } from "react-redux";
import GitHubButton from "./GithubBtn";

const errorType = {
    "auth/email-already-in-use": "이미 가입된 이메일 주소입니다.",
    "auth/invalid-email": "유효하지 않은 이메일 주소입니다.",
    "auth/weak-password": "비밀번호는 최소 6자리 이상입니다."
}

export default function CreateAccount() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkpwd, setCheckPwd] = useState('')
    const [error, setError] = useState("")
    
    const onChange = (e) => {
        const {name, value} = e.target;
        if(name === "userName") {
            setUserName(value)
        } else if(name === "email") {
            setEmail(value)
        } else if(name ==="password") {
            setPassword(value)
        } else if(name ==="checkpwd") {
            setCheckPwd(value)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("")
        // 1. 공백인지 확인
        if(isLoading || userName === "" || email === "" || password === "" || checkpwd === "") return;
        // 2. 비밀번호 확인과 같은지
        if(password !== checkpwd) {
            return setError('비밀번호가 일치하지 않습니다.') 
        }
        try{
            setIsLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: userName,
            });
            navigate("/home")
        } catch (e) {
            if(e instanceof FirebaseError) {
                console.log(e.code ,e.message)
                if(e.code in errorType) { 
                    setError(errorType[e.code])
                }
            } else {
                setError("회원가입에 실패했습니다. 다시 시도해주세요.")
            }
        } finally {
            setIsLoading(false)
        }
    };
    
    return (
        <Container>
            <Wrapper>
                <Title>회원가입</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="userName" placeholder="Username" type="text" onChange={onChange} required/>
                    <Input name="email" placeholder="Email" type="email" onChange={onChange} required/>
                    <Input name="password" placeholder="Password" type="password" onChange={onChange} required/>
                    <Input name="checkpwd" placeholder="Password" type="password" onChange={onChange} required/>
                    <Input type="submit" value={isLoading ? "Loading..." : "회원가입"}/>
                </Form>
                {error !== "" ? <Error>{error}</Error> : null}
                <SignLink>계정이 있으신가요?{" "}
                    <Link to='/login'>로그인</Link>
                </SignLink>
                <GitHubButton />
            </Wrapper>
        </Container>
    )
    // const [{ userName, email, password}, onChange, reset] = useInputs({
    //     userName: '',
    //     email: '',
    //     password: ''
    // });
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(userName, email, password)
    //     try{

    //     } catch (e) {

    //     } finally {
    //         setIsLoading(false)
    //     }

    //     reset(); 
    // };

}