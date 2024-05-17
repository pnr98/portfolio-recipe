import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const user = auth.currentUser
    console.log(user)
    if(!user){ // firebase에서 유저가 로그인되어있는지 확인
        return <Navigate to='/login' replace /> // 로그인 안 되어있으면 login화면으로
    }
    return children;
}