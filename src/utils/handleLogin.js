import { login } from '../redux/action/login';

export const handleLogin = async (user, dispatch) => {
    const accessToken = await user.getIdToken();
    const refreshToken = user.refreshToken;
    const userId = user.uid;

    // 로컬 스토리지에 사용자 정보 저장
    const userData = {
        isLoggedIn: true,
        accessToken,
        refreshToken,
        userId
    }
    localStorage.setItem("user", JSON.stringify(userData));

    dispatch(login(userData));
};