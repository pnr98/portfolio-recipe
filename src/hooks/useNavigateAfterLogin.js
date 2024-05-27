import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useEffect } from "react";

// 로그인 직후 뒤로가기 시, /home으로 이동
export default function useNavigateAfterLogin() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && isLoggedIn) {
                navigate("/home")
            }
        });
        return () => unsubscribe();
    }, [isLoggedIn, navigate]) //로그인 상태가 변경되면, 라우팅이 변경되면(예: /home으로 이동하면) 함수 호출
}