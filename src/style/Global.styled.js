import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-width: 1264px;
        --main-height: calc(100vh - 382px);
        --orange-00 : #F8F5EA;
        --orange-00-hover : #F0E9D1;
        --orange-00-active : #F5F1E0;

        --orange-10 : #F5C95B;
        --orange-10-hover: #F5C13D;

        --orange-20 : #F2B824;
        --orange-20-hover : #efa310;
        --orange-20-active : #ffd88c;

        --orange-30 : #ed9c00;
        --orange-40 : #dc950a;
        
        --orange-50: #FDF3E7;
        --orange-60: #E1742F;

        --yellow-10 : #F2D124;
        --yellow-20 : #F2EB24;
        --sky-blue : #E1ECF4;
        --white: #ffffff;
        --white-10 : #f1f2f3;
        --black: #000000;
        --brown: #513000;
        --brown-10 : #735542;
        --gray: #888888;
        --gray-10 : #D9D9D9;
        --gray-20 : #525960;
        --blue: #1d9bf0;

        --font-size-lg: clamp(2rem, 4vw, 3.5rem);
        --font-size-md: clamp(1.5rem, 3vw, 2.5rem);
        --font-size-sm: clamp(1rem, 1vw, 1.5rem);
    }


    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    }
    @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    }

    ${reset}
    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        min-height : 100vh;
        width: 100vw;
        overflow: hidden;
        overflow-y: auto;
        font: inherit;
        font-family: 'Pretendard-Regular', 'Noto Sans KR', 'Roboto', sans-serif;
        vertical-align: baseline;
        color: var(--black);
        text-align: center;
    }
    

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--brown);
}
    input {
        outline: none;
        background-color: transparent;
    }
`;