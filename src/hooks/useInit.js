import { useEffect, useState } from "react";
import { auth } from "../firebase";

// 앱이 시작될 때 파이어베이스의 초기 인증 상태를 기다리고, 해당 상태가 resolve된 후에 앱을 랜더링하기 위함
export const useInit = () => {
    const [isLoading, setIsLoading] = useState(true);
    const init = async () => { // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인여부를 확인하는 동안 기다리겠다는 것
        await auth.authStateReady(); // 인증상태가 준비되었는지 기다림
        setIsLoading(false)
    }
    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("user") ? true : false;
        if(isLoggedIn) {
            setIsLoading(false)
        } else{
            init();
        }
    }, []);
    return {isLoading}
}