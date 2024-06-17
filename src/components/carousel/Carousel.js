import styled, {css} from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useCallback, useEffect, useState } from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 10px;
    padding: 0 50px; 
`

const Button = styled.button`
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 50px;
    z-index: 101;
    padding: 0;
    position: absolute;
    visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
    left: ${({ left }) => left ? "-10px" : "auto"};
    right: ${({ right }) => right ? "-10px" : "auto"};
    &:hover {
        & > * {
        color: var(--orange-20-hover);
    }}
    & > * {
        color: var(--orange-20);
    }
`
const SlideContainer = styled.div`
    overflow: hidden;
`
const Slide = styled.ul`
    display: flex;
    flex-direction: row;
    
    margin: 0 auto;
    scroll-behavior: smooth;
    width: ${({ width }) => width}px;
    transform: translateX(${props => props.translate}px);
    transition: transform 0.5s ease;

    & > * {
        flex: 0 0 20%; // 한 번에 5개의 요소가 보이도록 설정
    }
`

export default function Carousel({ children, fetchMoreRecipes, hasMore }) {
    const carouselRef = useRef(null)
    const isScrolling = useRef(false) // 스크롤 중인지 확인.
    const [currentSlide, setCurrentSlide] = useState(0); // 슬라이드 위치
    const [slideWidth, setSlideWidth] = useState(0) // 슬라이드 가로길이 for 동적  

    const scroll = async (direction) => {
        if(isScrolling.current) return; // 이미 스크롤 중이면 실행하지 않음

        const { current } = carouselRef;
        if(current) {
            const childWidth = current.firstChild.offsetWidth; // slide(ul)의 첫번째 자식의 width
            const scrollAmount = childWidth * 5;
            isScrolling.current = true;

            if (direction === "left") {
                setCurrentSlide(prev => Math.max(prev - scrollAmount, 0))
            } else if (direction === "right") {
                if (currentSlide + scrollAmount >= current.scrollWidth - current.offsetWidth) { 
                    // 현재 슬라이드 위치에서 스크롤 하려는 양 >= 전체 슬라이드 리스트 너비 - 현재 화면에 보이는 슬라이드 너비 (남은 슬라이드)
                    // => 참일 경우, 슬라이드가 끝에 도달했음
                    if (hasMore) {
                        await fetchMoreRecipes();
                    } // 불러올 레시피가 더이상 없으면, 레시피를 작성하라는 문구
                }
                setCurrentSlide(prev => prev + scrollAmount);
            }

            setTimeout(() => {
                isScrolling.current = false // 스크롤 완료 후 false로 설정.
            }, 500); // 0.5초 후 스크롤 다시 허용
        }
    }
    
    useEffect(() => {
        const { current } = carouselRef;
        if (current) {
            const childWidth = current.firstChild && current.firstChild.offsetWidth;
            setSlideWidth(childWidth * 5);
        }
    }, [children]);

    const rightButtonHidden = !hasMore && (currentSlide + slideWidth >= carouselRef.current?.scrollWidth);

    return (
        <Container>
            <Button left="true" onClick={() => scroll("left")} hidden={currentSlide === 0}>
                <IoIosArrowBack />
            </Button>
            <SlideContainer>
                <Slide ref={carouselRef} translate={-currentSlide} width={slideWidth}>
                    {children}
                    {/* 레시피를 추가해 주세요. */}
                </Slide>
            </SlideContainer>
            <Button right="true" onClick={() => scroll("right")} hidden={rightButtonHidden}>
                <IoIosArrowForward />
            </Button>
        </Container>
    )
}