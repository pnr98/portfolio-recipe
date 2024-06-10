import styled from "styled-components"
import RecipeCard from "./RecipeCard"
import { useRecipes } from "../../hooks/useRecipes";
import Carousel from "../../components/carousel/Carousel";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    h2 {
        font-weight: 600;
        margin-bottom: 10px;
    }
`

export default function CategoryRecipes({ category }) {
    const { recipes, loading, fetchMoreRecipes, hasMore } = useRecipes(category);

    if(loading && recipes.length === 0) {
        return <div>loading...</div>
    }
    return (
        <CategoryContainer>
            <h2>{category}</h2>
            {recipes.length > 0 ? (
                <Carousel fetchMoreRecipes={fetchMoreRecipes} hasMore={hasMore}>
                    {recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <RecipeCard recipe={recipe}/>
                        </li>
                    
                    ))}
                </Carousel>
            ) : (
                <div>No recipe</div>
            )}
        </CategoryContainer>
    )
}