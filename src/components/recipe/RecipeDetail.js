import { styled } from 'styled-components';

const DetailContainer = styled.div`
    display: flex;
`;

export default function RecipeDetail({ recipe }) {
    const ingredients = recipe.ingredients
        .split('\n') // 줄바꿈을 기준으로 분할
        .map(item => item.trim()) // 각 항목의 공백 제거
        .filter(item => item); // 빈 항목 제거

    const steps = Object.keys(recipe)
        .filter(key => key.startsWith('step'))
        .sort()
        .map(stepKey => recipe[stepKey]);

    return (
        <DetailContainer>
            <img src={recipe.image_URL} alt={recipe.recipe_name} />
            <h1>{recipe.recipe_name}</h1>
            <p>Cooking Time: {recipe.cook_time} mins</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            {steps.map((step, index) => (
                <p key={index}>{step}</p>
            ))}
        </DetailContainer>
    );
}