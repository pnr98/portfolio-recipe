import styled from "styled-components"

const TagContainer = styled.div`
    display: flex;
    gap: 6px;
`
const TagBox = styled.div`
    display: inline-block;
    color: var(--white);
    background-color: var(--orange-20);
    padding: 2px 5px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 50px;
    text-align: center;
    white-space: nowrap;
    
    &:hover{
        background-color: var(--orange-20-hover);
    }
`

export default function Tag({ tags }) {
    return(
        <TagContainer>
            {tags.map((el, index) => {
                if(!el) {
                    return null;
                }
                return <TagBox key={index}>{el}</TagBox>
            })}
        </TagContainer>
        
    )
}