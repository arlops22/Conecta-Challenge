import styled from 'styled-components';

export const CardProduct = styled.div `

    width: 360px;
    padding: 45px 0 75px 0;
    margin: 0 40px;

    box-shadow: 0 8px 15px rgb(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    img {
        height: 260px;
        margin-bottom: 18px;
    }

    h4 {
        font-weight: 700;
        margin-bottom: 12px;
    }

    p {
        font-family: Roboto;
    }

    button {
        position: absolute;
        bottom: -26px;
    }

    @media(max-width: 780px) {
        & {
            margin: 0;
            width: 350px;
        }
    }
    @media(max-width: 560px) {
        & {
            width: 100%;
        }
    }

`;