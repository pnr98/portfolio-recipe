import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`
export const Wrapper = styled.div`
    border-radius: 8px;
    border: 2px solid var(--gray-20);
    width: 420px;
    padding: 50px 0px; 
`
export const Title = styled.h1`
    font-size: 30px;
`
export const Form = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
`
export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 6px;
    border: 2px var(--gray-10) solid;
    width: 80%;
    font-size: 15px;
    &[type="submit"] {
        color: var(--white);
        border: var(--orange-30);
        background: var(--orange-30);
        font-weight: 600;
        line-height: 20px;
        &:hover {
            background: var(--orange-40);
        }
        &:active {
            background: var(--orange-50);
        }
    }
`
export const Error = styled.div`
    font-weight: 500;
    color: tomato;
    margin: 10px 0px;
`
export const SignLink = styled.span`
    margin-bottom: 20px;
    color: var(--gray);
    a {
        color: var(--blue)
    }
`