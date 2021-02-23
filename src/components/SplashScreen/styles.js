import styled from 'styled-components';

export const SplashContainer = styled.div `

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #271F20;

    img {
        height: 200px;
        width: auto;

        animation: imgAnimation;
        animation-duration: 1s;
    }

    @keyframes imgAnimation{
        0% {
            height: 0;
        }
        30% {
            height: 200px;
        }
        60% {
            height: 50px;
        }
        100% {
            height: 200px;
        }
    }

`;