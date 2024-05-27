import { styled, css } from 'styled-components';

const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    justify-content: center;
    border-radius: 8px;
    color: var(--brown);

    /* 색상 */
    ${(props) => props.color && COLORS[props.color]}

    /* 사이즈 */;
    ${(props) => props.size && SIZES[props.size]};

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
        background: var(--orange-30);
    } */
`

const SIZES = {
    sm: css`
        font-size: 14px;
        padding: 10px 14px;
        font-weight: 500;
    `,
    md: css`
        font-size: 15px;
        padding: 12px 16px;
        font-weight: 700;
    `,
    lg: css`
    `,
}
const COLORS = {
    white: css`
        background: var(--white);
        &:hover {
            background: var(--orange-00);
        }
        &:active {
            background: var(--orange-10);
        }
    `,
    beige: css`
        background: var(--orange-00);
        &:hover {
            background: var(--orange-00-hover);
        }
        &:active {
            box-shadow: 0 0 0 4px var(--orange-00-active);
        }
    `,
    orange: css`
        background: var(--orange-20);
        color: var(--white);
        &:hover {
            background: var(--orange-20-hover);
        }
        &:active {
            box-shadow: 0 0 0 4px var(--orange-20-active);
        }
    `
}

export default function Button({ onClick, children, size, color}) {
    return (
        <StyledButton onClick={onClick} size={size} color={color}>{children}</StyledButton>
    )
}

