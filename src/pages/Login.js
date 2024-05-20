import styled from "styled-components"
import LoginForm from "../components/Auth/LoginForm"
import useNavigateAfterLogin from "../hooks/useNavigateAfterLogin"


const Container = styled.div`
    display: flex;
    justify-content: center;
`
export default function Login() {
    useNavigateAfterLogin()

    return (
        <Container>
            <LoginForm />
        </Container>
    )
}