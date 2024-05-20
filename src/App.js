import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { AppContainer } from "./style/App.styled";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/common/Header";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import MyPage from "./pages/MyPage";
import RecipeDetail from "./pages/RecipeDetail";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import ProtectedRoute from "./components/protected-route";
import { useInit } from "./hooks/useInit";
import { useAuthInit } from "./hooks/useAuthInit";

export default function App() {
  const { isLoading } = useInit();
  useAuthInit(); 

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

