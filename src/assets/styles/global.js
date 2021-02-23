import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {

        max-width: 100vw;
        max-height: 100vh;

        background: var(--white);
    }

    *, button, input {
        outline: none;
        border: none;
        background: none;

        font: 400 16px PT Serif;
        color: var(--text-color);
    }

    :root {
        --green: #00EC5B;
        --green-hover: #32fc7f;
        --white: #FFFFFF;
        --gray: #494C49;
        --black: #1B1F1C;
        --black-hover: #0f0f0f;
        --text-color: #101213;
    }

`; 

export default GlobalStyle;