import styled from "styled-components"
import Tag from "../tag/Tag"
import { FaBookmark } from "react-icons/fa6"
import { Link } from "react-router-dom"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 180px; 
    height: 250px;
    margin: 0 3px;
    border-radius: 30px;
    background-color: var(--orange-00);
    transition: 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
    }
    flex: 0 0 auto; // 크기를 고정하고 flex로 스크롤시 이동

    /* @media (max-width: 768px) {
        width: 150px;
        height: 250px;
    } */
`
const ImgContainer = styled.div`
    position: relative;
    height: 60%;
        img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        object-fit: cover;
        }
`
const Bookmark = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 10px;
    margin: 10px;   
    width: 35px;
    height: 35px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        svg {
            color: var(--orange-20);
        }
    }
`
const StyledMark = styled(FaBookmark)`
    color: var(--gray-10);
`;

const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    height: 40%;
`
const RecipeName = styled.div`
        font-size: 16px;
        /* font-size: var(--font-size-sm); */
        font-weight: 600;
        text-align: left;
`

export default function RecipeCard( {recipe} ) {
    const {id, recipe_name, image_URL, food_type, difficulty, cook_time } = recipe;
    const tags = [food_type, difficulty, cook_time]

    return (
        <CardContainer >
            <Link to={`/recipe/${id}`}>
                <ImgContainer>
                    <img src={image_URL} alt={recipe_name}></img>
                    <Bookmark>
                        <StyledMark />
                    </Bookmark>
                </ImgContainer>
                <RecipeInfo>
                    <RecipeName>{recipe_name}</RecipeName>
                    <Tag tags={tags} />
                </RecipeInfo>
            </Link>
        </CardContainer>
    )
}