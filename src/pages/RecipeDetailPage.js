import styled from "styled-components"
import { useParams } from "react-router-dom"
import useRecipeDetail from "../hooks/useRecipeDetail"
import RecipeDetail from "../components/recipe/RecipeDetail"
import { useEffect } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100vw;
    padding: 20px 60px;
`

export default function RecipeDetailPage() {
    const { id } = useParams()
    const { recipe, loading, error, fetchRecipe } = useRecipeDetail(id)

    useEffect(() => {
        // URL 파라미터가 변경될 때마다 데이터를 다시 가져오기 위해 fetchRecipeDetail 함수 호출
        fetchRecipe(id);
    }, [id, fetchRecipe]);
    
    // if(loading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>{error}</div>;
    // }
    // if (!recipe) {
    //     return <div>No recipe data</div>;
    // }

    return (
        <Container>
            <RecipeDetail recipe={recipe} />
        </Container>
    )
}