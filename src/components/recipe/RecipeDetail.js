import { styled } from 'styled-components';
import Tag from "../tag/Tag"
const recipe = {
    "recipe_id": 1,
    "image_URL": "https://static.wtable.co.kr/image/production/service/recipe/2434/d0d56c03-d870-4e50-b594-96d7bd4b5745.jpg?size=500x500",
    "recipe_name": "돼지안심 스테이크",
    "food_type": "한식",
    "difficulty": "중급",
    "cook_time": 30,
    "username": "LG 인덕션",
    "description": "스테이크 하면 소고기만 떠오르신다고요? 돼지고기 안심을 이용해도 담백하고 고급스러운 스테이크를 거뜬하게 만들 수 있어요. 근사한 비주얼이라 분위기 있는 식사를 하고 싶을 때 딱 걸맞는 메뉴랍니다!",
    "ingredients": "기본 재료\r\n\r\n2인분\r\n돼지고기 안심\r\n1덩이(300g)\r\n올리브오일\r\n1큰술\r\n버터\r\n2큰술\r\n타임\r\n3줄기\r\n마늘\r\n3톨\r\n\r\n밑간 재료\r\n\r\n소금\r\n1/2큰술\r\n후춧가루\r\n약간\r\n\r\n가니쉬 재료\r\n\r\n오렌지\r\n1개\r\n적양파\r\n1/2개\r\n파프리카 (노랑, 빨강)\r\n각 1/2개\r\n청양고추\r\n1개\r\n파슬리\r\n약간\r\n올리브오일\r\n1큰술\r\n꿀\r\n1큰술\r\n소금\r\n약간\r\n후춧가루\r\n약간\r\n라임즙\r\n1개 분량",
    "step1": "Step 1\r\n\r\n돼지 안심은 근막을 제거하고 굵기가 다른 양 옆을 잘라내주세요. 소금, 후추로 밑간한 후 랩으로 단단하게 말아 실온에서 30분 정도 냉기를 빼주세요. \r\r\n(tip. 남은 고기는 다양한 요리에 활용해 보세요)",
    "step2": "Step 2\r\n\r\n가니쉬용 오렌지는 껍질을 벗겨 제스트를 내어 채를 썰고 속살만 도려내주세요. 양파, 파프리카, 고추, 파슬리는 다져주세요. 손질한 채소와 나머지 재료를 섞어 차갑게 준비해 주세요.",
    "step3": "Step 3\r\n\r\n팬에 올리브오일을 두르고 9단에서 1분간 예열해 주세요.",
    "step4": "Step 4\r\n\r\n손질해 둔 돼지고기 안심을 올려 3단에서 1분씩 총 4분간 돌려가며 구워주세요.",
    "step5": "Step 5\r\n\r\n3단에서 1분씩 총 4분간 돌려가며 한번 더 구워주세요.",
    "step6": "Step 6\r\n\r\n으깬 마늘과 허브, 버터를 넣고 5단에서 4분간 버터를 끼얹어가며 구워주세요.",
    "step7": "Step 7\r\n\r\n불을 끄고 팬에 포일을 덮어 10분간 레스팅 시켜주세요.",
    "step8": "Step 8\r\n\r\n구운 고기는 1cm 두께로 썰어주세요.",
    "step9": "Step 9\r\n\r\n접시에 먹기 좋게 썬 안심과 가니쉬를 올려 맛있게 즐겨주세요."
}

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 200px;
    padding: 0px 50px 30px 50px;
    color: var(--brown-10);
    text-align:start;
    gap: 30px;
    font-size: 18px;
    line-height: 1.5;
    .ingredient {
        white-space: pre-wrap;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    height: auto;
    max-width: 100vw; 
    img {
        margin: 50px auto;
        width: 100%;
        height: calc((100vh * 4) / 6);;
        object-fit: cover;
        border-radius: 30px;
        margin-bottom: 0px;
    }
    
`;

const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--orange-50);
    border-radius: 30px;
    padding: 30px;
`;


const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
    h1 {
        font-weight: 700;
        font-size: 30px;
    }
    div {
        margin-bottom: 5px;
    }
    .description {
        
    }

`;


const Ingredients = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    .container {
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, auto));
        gap: 20px;
    }

    .ingredients {
    background-color: white;
    border-radius: 30px;
    padding: 20px;
    }
`;

const Steps = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    .container {
        display: grid;
        gap: 20px;
    }
    .steps {
        background-color: white;
        border-radius: 30px;
        padding: 20px;
    }
`;
const Title = styled.h2`
        font-size: 22px;
        font-weight: 600;
        padding: 10px;
        margin-bottom: 10px;
`;
const SubTitle = styled.h3`
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
`;


export default function RecipeDetail() {
    const keywordsRegex = /[가-힣]+\s재료/g; // 재료 구분을 위한 키워드들 ex)기본 재료, 밑간 재료... 
    const amountRegex = /\d+인분/; // 몇 인분?

    const ingredientTypes = recipe.ingredients.match(keywordsRegex); // 재료 타입 추출

    const ingredientStrings = recipe.ingredients.split(new RegExp(`${keywordsRegex.source}|\\r\\n\\r\\n`, 'g')).filter(Boolean); // 각 타입 별로 재료 문자열 추출

    const amountMatch = recipe.ingredients.match(amountRegex); // amount 추출
    const amount = amountMatch ? amountMatch[0] : null;

    const ingredientsList = []; // 재료 리스트

    ingredientTypes.forEach((type, index) => {
        const ingredientStr = ingredientStrings[index] ? ingredientStrings[index].replace(amountRegex, '').trim() : ""; // 재료 가져오기
        const ingredients = ingredientStr.split('\r\n').filter(str => str.trim() !== ""); // 재료/수량 각각 분리
        // 2개씩 짝지어서 묶기
        const pairedIngredients = [];
        for (let i = 0; i < ingredients.length; i += 2) {
            if (ingredients[i + 1]) { // 수량이 있으면,
                pairedIngredients.push(`${ingredients[i]} - ${ingredients[i + 1]}`); // (재료 - 수량) 의 형태
            } else { // 수량이 없으면,
                pairedIngredients.push(ingredients[i]);
            }
        }

        ingredientsList.push({
            type,
            ingredientsList: pairedIngredients
        });
    })

    const ingredient = {
        amount,
        ingredients: ingredientsList,
    };

    const stepRegrex = /^Step \d+\s*/;
    const steps = Object.keys(recipe)
        .filter(key => key.startsWith('step'))
        .sort()
        .reduce((acc, stepKey) => {
            acc[stepKey] = recipe[stepKey].replace(stepRegrex, '');
            return acc
        }, {});
    console.log(steps)
    const tags = [recipe.food_type, recipe.difficulty, recipe.cook_time]

    return (
        <DetailContainer>
            <ImgContainer>
                <img src={recipe.image_URL} alt={recipe.recipe_name} />
            </ImgContainer>
            <RecipeContainer>
                <RecipeInfo>
                    <h1>{recipe.recipe_name}</h1>
                    <Tag tags={tags}></Tag>
                    <div className='description'>{recipe.description}</div>
                </RecipeInfo>
                <Ingredients>
                    <Title>재료 ({ingredient.amount})</Title>
                    <div className='container'>
                        {ingredient.ingredients.map((el, index) => (
                            <div className='ingredients' key={index}>
                                <SubTitle>{el.type}</SubTitle>
                                <div className='ingredient'>{el.ingredientsList.join('\n')}</div>
                            </div>
                        ))}
                    </div>
                </Ingredients>
                <Steps>
                    <Title>Instructions</Title>
                    <ol className='container'>
                        {Object.entries(steps).map(([stepNumber, content], index) => (
                            <li className='steps' key={index}>
                                <SubTitle>{stepNumber}</SubTitle>
                                <div className='content'>{content}</div>
                            </li>
                        ))}
                    </ol>
                </Steps>
            </RecipeContainer>
        </DetailContainer>
    );
}