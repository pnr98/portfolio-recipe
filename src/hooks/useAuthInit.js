import { useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../redux/action/login";
import { useDispatch } from "react-redux";
import { handleLogin } from "../utils/handleLogin";

// 앱이 처음 로드될 때, 사용자의 인증 상태를 확인하고, 그에 따라 Redux 상태를 업데이트.
// 사용자가 새로고침해도 로그인 상태가 유지되며, 헤더 상태도 유지
export const useAuthInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // 로컬스토리지에서 사용자 정보 가져옴
        const storedUser = localStorage.getItem("user")

        if(storedUser) { // 로컬스토리지에 사용자 정보가 저장되어 있으면,
            const user = JSON.parse(storedUser)
            dispatch(login(user))
        } else { // 저장되어 있지 않으면, firebase와 연결해서 유저 정보를 불러옴.
            // firebase의 인증상태(로그인, 로그아웃)가 변경될 때마다 콜백 함수가 호출됨
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                console.log("usePersistLogin 실행");
                if (user) { 
                    await handleLogin(user, dispatch)
                } else {
                    dispatch(logout())
                }
            });
            return () => unsubscribe(); // 컴포넌트가 언마운트(뷰, 메모리에서 제거)될 때 Firebase의 인증 상태 변경 리스너를 해제
        }
    }, [dispatch]) // dispatch가 변경될 때마다 useEffect가 실행 = 리덕스 스토어의 상태가 변경될 때마다 인증 상태를 업데이트
}