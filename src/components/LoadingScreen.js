import styled from "styled-components"

const DotContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //
    height: 100%;
    width: 100%;
`
const Text = styled.div`
    font-size: 24px;
`
const Dot = styled.div`
    height: 20px;
    width: 20px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: red;
    animation: pulse 1.5s infinite ease-in-out;
    :last-child {
        margin-right: 0;
    }
    :nth-child(1) {
        animation-delay: -0.3s;
    }
    :nth-child(2) {
        animation-delay: -0.1s;
    }
    :nth-child(3) {
        animation-delay: 0.1s;
    }
    @keyframes pulse {
        0% {
            transform: scale(0.8);
            background-color: #b3d4fc;
            box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
        }

        50% {
            transform: scale(1.2);
            background-color: #6793fb;
            box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
        }

        100% {
            transform: scale(0.8);
            background-color: #b3d4fc;
            box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
        }
}
`

export default function LoadingScreen() {
    return (
        <DotContainer>
            <Text>
                Loading...
            </Text>
            {/* <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot /> */}
        </DotContainer>
    )
}