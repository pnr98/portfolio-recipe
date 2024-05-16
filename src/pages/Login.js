import styled from "styled-components"
import LoginForm from "../components/Auth/LoginForm"

const Container = styled.div`
    display: flex;
    justify-content: center;
`
export default function Login() {
    return (
        <Container>
            <LoginForm>
            </LoginForm>
        </Container>
    )
}