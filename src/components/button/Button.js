import { styled, css } from 'styled-components';

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    color: var(--brown);
    font-weight: 700;
    background: var(--white);
    font-size: 15px;
    &:hover {
        background: var(--orange-00);
    }
    &:active {
        background: var(--orange-10);
    }

    /* 버튼 slash 효과 */
    /* overflow: hidden;
    transition: 0.3s;
    position: relative;
    &::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        z-index: -1;
        width: 120%;
        height: 210%;
        background: var(--orange-10);
        transform: translate(-50%, -50%) rotate(-45deg) scaleX(0);
        transition: 0.3s;
    }
    &:hover {
        background: transparent;
        &::before {
            transform: translate(-50%, -50%) rotate(-45deg) scaleX(1);
        }
    }
    &:active {
        border: 3px solid var(--orange-30);
        background: var(--orange-30);
    } */
`

const SIZES = {
    sm: css`
    `,
    md: css`
    `,
    lg: css`
    `,
}
export default function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick} >{children}</StyledButton>
    )
}

