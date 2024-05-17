import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
`
const Wrapper = styled.div`
`
const Form = styled.form`
`
const Title = styled.div`

`
const Contents = styled.div`
    background: white;
    padding: 5px;
    height: auto;
`

export default function AuthForm({type}) {
    const [{ username, email, password}, onChange, reset] = useInputs({
        username: '',
        email: '',
        password: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password)
        reset(); 
    };

    return (
        <Container>
            <Wrapper>
                <Title>{type === 'signup' ? '회원가입' : '로그인'}</Title>
                <Form onSubmit={onSubmit}>
                    <Input name="username" placeholder="Name" type="text" onChange={onChange} required/>
                    <Input name="email" placeholder="Email" type="email" onChange={onChange} required/>
                    <Input name="password" placeholder="Password" type="password" onChange={onChange} required/>
                    <Input type="submit" value={isLoading ? "Loading..." : "Create User"}/>
                </Form>
            </Wrapper>
        </Container>
    )
}