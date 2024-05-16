import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../button/Button'
import { auth } from '../../firebase';
import { useState } from 'react';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    height: 60px;
`
const NavContainer = styled.nav`
    display: flex;
    width: 92%;
`
const LogoBox = styled.div`
    width: 120px;
    margin-right: 24px;
    display: flex;
    align-items: center;
`
const LogoImg = styled.img`
    width: 100%;
`
const ContentContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`
const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
`
const StyledLi = styled.li`
    display: flex;
`
const StyledLink = styled(Link)`
    padding: 10px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    color: var(--brown);
    font-weight: 700;
    background: var(--white);
    &:hover {
        background: var(--orange-00);
    }
    &:active {
        background: var(--orange-10);
    }
`;

export default function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const logOut = () => {
        auth.signOut();
    }
    return (
        <HeaderContainer>
            <NavContainer>
                <LogoBox>
                    <Link to="/home">
                        <LogoImg src='logo1.png' />
                    </Link>
                </LogoBox>
                <ContentContainer>
                    <StyledUl>
                        {!isLogin ? (
                            <>
                                <StyledLi><StyledLink to="/login">로그인</StyledLink></StyledLi>
                                <StyledLi><StyledLink to="/sign-up">회원가입</StyledLink></StyledLi>
                                <StyledLi><StyledLink to="/guest-login">게스트 로그인</StyledLink></StyledLi>
                            </>
                        ) : (
                            <>
                                <StyledLi><StyledLink to="/register">레시피 작성</StyledLink></StyledLi>
                                <StyledLi><StyledLink to="/mypage">마이페이지</StyledLink></StyledLi>
                                <StyledLi><Button onClick={logOut} >로그아웃</Button></StyledLi>
                            </>
                        )}
                    </StyledUl>
                </ContentContainer>
            </NavContainer>
        </HeaderContainer>

    )
}