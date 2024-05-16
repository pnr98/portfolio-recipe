import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { AppContainer } from "./style/App.styled";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/common/Header";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import MyPage from "./pages/MyPage";
import RecipeDetail from "./pages/RecipeDetail";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import ProtectedRoute from "./components/protected-route";
import { auth } from "./firebase";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => { // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인여부를 확인하는 동안 기다리겠다는 것
    await auth.authStateReady(); // 인증상태가 준비되었는지 기다림
    setIsLoading(false)
  }
  useEffect(() => {
    init();
  },[]);
  
  return (
    <AppContainer>
        <Header />
      {isLoading ? <LoadingScreen /> :
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recipe-detail" element={<RecipeDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/register" element={<AddRecipe />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
      }
    </AppContainer>
  );
}

