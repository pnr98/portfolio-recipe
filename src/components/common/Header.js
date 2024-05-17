import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/Button'
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/action/login';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector((state) => state.loginReducer) // loginReducer의 상태를 가져옴
    const isLogin = loginState.isLoggedIn

    const onLogOut = async () => {
        const ok = window.confirm("로그아웃 하시겠습니까?")
        if(ok) {
            await auth.signOut();
            dispatch(logout()) // 로그아웃 액션을 디스패치하여 Redux 상태를 업데이트
            navigate('/login')
        }

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
                                <StyledLi><Button onClick={onLogOut} >로그아웃</Button></StyledLi>
                            </>
                        )}
                    </StyledUl>
                </ContentContainer>
            </NavContainer>
        </HeaderContainer>

    )
}