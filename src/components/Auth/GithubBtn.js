import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import styled from "styled-components"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom"

const Button = styled.span`
    background-color: var(--white);
    margin-top: 50px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Logo = styled.img`
    height: 25px;
`

export default function GitHubButton() {
    const navigate = useNavigate()
    const onCilck = async() => {
        try{
            const provider = new GithubAuthProvider
            await signInWithPopup(auth, provider)
            navigate('/home')
        }
        catch (e) {
            console.error(e)
        }
        finally {

        }
    }
    return (
        <Button onClick={onCilck}>
            <Logo src='/github-mark.png' />
            Continue with Github
        </Button>
    )
}