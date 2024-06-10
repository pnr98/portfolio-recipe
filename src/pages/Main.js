import styled from "styled-components"
import CategoryRecipes from "../components/recipe/CategoryRecipes"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 1280px;
    & > section {
        
    }
`

const Banner = styled.section`
    
`
const ReciepeWrapper = styled.section`

`

export default function Main() {
    //2. 
    const categories = ["한식", "중식", "일식", "양식", "기타"];
    // if (loading) {
    //     return <div>loading...</div>;
    // }
    return (
        <Container>
            <Banner></Banner>
            <ReciepeWrapper>
                {categories.map((category) => (
                    <CategoryRecipes key={category} category={category}/>
                ))}
            </ReciepeWrapper>
        </Container>
    )
}