import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const animate = keyframes`
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`
const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const ModalContainer = styled.div`
    background: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
    max-width: 350px;
    width: 100%;
    z-index: 1001;
    animation: ${animate} 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940);
`

const Text = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

// type = 목적
export default function Modal({ isOpen, onClose, func, type }) {
    const navigate = useNavigate();

    const [modalVisible, setModalVisible] = useState(isOpen);
    const closeModal = () => {
        setModalVisible(false)
        onClose()
    }

    useEffect(() => {
        setModalVisible(isOpen)
    }, [isOpen])
    
    const handleModalType = (type) => {
        func()
        closeModal()
        // 해당 코드 필요 없음.
        switch (type) {
            case 'Welcome':
                return navigate("/home")
            case 'Login':
                return navigate("/login")
            case 'Logout':
                return navigate("/login")
            case 'Create':
                return navigate("/recipe/${recipe-id}")
            case 'Update':
                return navigate("/recipe/${recipe-id}")
            case 'Delete':
                return navigate("/recipe")
            default:
                return null;
        }
    }
    // text
    const getModalContent = () => {
        switch (type) {
            case 'Welcome':
                return `환영합니다.`;
            case 'Login':
                return "로그인 후 이용해주세요.";
            case 'Logout':
                return "로그아웃 하시겠습니까?";
            case 'Create':
                return "레시피 등록을 완료했습니다.";
            case 'Update':
                return "레시피 수정을 완료했습니다.";
            case 'Delete':
                return "레시피 삭제를 완료했습니다.";
            default:
                return '';
        }
    }

    return (
        <>
        {modalVisible && (
            <ModalBackground onClick={closeModal}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <Text>{getModalContent()}</Text>
                    <BtnContainer>
                        <Button onClick={closeModal} size="sm" color="beige">취소</Button>
                        <Button onClick={handleModalType} size="sm" color="orange">확인</Button>
                    </BtnContainer>
                </ModalContainer>
        </ModalBackground>
        )}
        </>
    );
};