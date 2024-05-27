import styled from "styled-components"
import CreateAccount from "../components/Auth/CreateAccount"

const Container = styled.div`
    display: flex;
    justify-content: center;
`
export default function SignUp() {
    return (
        <Container>
            <CreateAccount>
            </CreateAccount>
        </Container>
    )
}