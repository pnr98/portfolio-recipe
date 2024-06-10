import styled from "styled-components"
import Container from "../pages/Main"
import { useParams } from "react-router-dom"
import useRecipeDetail from "../hooks/useRecipeDetail"
import RecipeDetail from "../components/recipe/RecipeDetail"

export default function RecipeDetailPage() {
    const { id } = useParams()
    const {recipe, loading, error} = useRecipeDetail(id)

    if(loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!recipe) {
        return <div>No recipe data</div>;
    }

    return (
        <Container>
            <RecipeDetail recipe={recipe} />
        </Container>
    )
}