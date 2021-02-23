import styled from 'styled-components';

const Container = styled.div `

    width: 80vw;
    margin: 0 auto;

    @media(max-width: 1024px) {
        & {
            width: 95vw;
        }
    }
    @media(max-width: 560px) {
        & {
            width: 90vw;
        }
    }

`;

const Section = styled.section `

    padding: 90px 0;
    background: var(--${props => props.bgColor});

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    h3 {
        font-size: 1.125em;
        font-weight: 700;
        text-align: center;
        margin-bottom: 24px;
    }

    p {
        text-align: center;
    }

    .product-description {
        width: 480px;
    }


    @media(max-width: 560px) {
        .experiment-title {
            margin-top: 112px;
        }
        .product-description {
            width: 85%;
        }
    }

`;
const HomeSection = styled.section `

    background-image: url(${props => props.bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    height: 100vh;

    h1 {
        font-size: 4em;
        font-weight: 700;
        color: var(--white);
        margin-bottom: 24px;
    }

    @media(max-width: 1024px) {
        h1 {
            font-size: 3em;
        }
    }
    @media(max-width: 560px) {
        h1 {
            font-size: 2.375em;
            margin-bottom: 80px;
        }   
    }

`;

const HomeContainer = styled.div `

    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    div {
        width: 460px;
    }

    @media(max-width: 1024px) {
        & {
            width: 100%;
        }
        div {
            width: 400px;
        }
    }
    @media(max-width: 780px) {
        div {
            width: 380px;
        }
    }
    @media(max-width: 560px) {
        & {
            flex-direction: column-reverse;
            justify-content: center;
        }

        div {
            width: 100%;
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
        }

        img {
            height: 300px;
        }
    }

`; 

const CardBox = styled.div ` 
    display: flex;
    justify-content: center;

    padding: 60px 0;

    @media(max-width: 780px) {
        & {
            width: 95vw;
            justify-content: space-between;
        }
    }
    @media(max-width: 560px) {
        & {
            width: 90vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;       
        }  

        & :first-child {
            margin-bottom: 64px;
        } 
    }
`;

const FloatImages = styled.div `

    & :nth-child(1) {
        height: 170px;
        position: absolute;
        top: -65px;
        left: calc(15vw + 24px);
        transform: rotate(15deg);
        filter: blur(1px);
    }

    & :nth-child(2) {
        height: 350px;
        position: absolute;
        bottom: -90px;
        left: calc(15vw + 100px);
        transform: rotate(-15deg);
    }

    & :nth-child(3) {
        height: 475px;
        position: absolute;
        bottom: -140px;
        right: 20vw;
        transform: rotate(15deg);
    }

    @media(max-width: 1024px) {
        & :nth-child(1) {
            left: 5vw;
        }

        & :nth-child(2) {
            left: calc(5vw + 50px);
            height: 320px;
        }

        & :nth-child(3) {
            right: 7vw;
        }
    }

    @media(max-width: 560px) {
        & :nth-child(1) {
            display: none;
        }

        & :nth-child(2) {
            height: auto;
            width: 180px;
            transform: rotate(0);
            left: calc(50vw - 90px);
            top: -120px;
        }

        & :nth-child(3) {
            display: none;
        }
    }

`;

const ContactContainer = styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1024px) {
        & {
            flex-direction: column;
        }
    }
    
`;

const ContactBox = styled.div `

    h2 {
        font-size: 2.5em;
        font-weight: 700;
        color: var(--white);
        margin-bottom: 20px;
    }

    div {
        display: flex;
        align-items: center;
    }

    a {
        margin-right: 16px;

        &:hover svg {
            fill: var(--green);
        }
    }

    a svg {
        fill: var(--white);
        transition: .2s;
        width: 1.125em;
        height: 1.125em;
    }

    p {
        color: var(--white);
        text-transform: uppercase;
        font-size: 0.75em; 
        font-family: Inter;
    }

    span {
        height: 16px;
        width: 2px;
        background: var(--white);
        margin-right: 16px;
    }

    @media(max-width: 1024px) {
        div {
            justify-content: center;
            margin-bottom: 64px;
        }
    }

    @media(max-width: 560px) {
        h2 {
            font-size: 2em;
        }
    }

`;

const Footer = styled.footer `

    background: var(--black);
    padding: 48px 0;

    p {
        color: var(--gray);
        font-size: 0.75em;
        font-family: Inter;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .projected-by {
        p {
            color: var(--white);
            font-size: 0.5em;
        }
    }

    img {
        height: 40px;
    }

    @media(max-width: 1024px) {
        div {
            flex-direction: column
        }

        .projected-by {
            flex-direction: row;
            margin-top: 24px;
        }
    }

`;

export { 
    Container, 
    Section, 
    HomeSection, 
    HomeContainer, 
    CardBox, 
    FloatImages, 
    ContactContainer, 
    ContactBox,
    Footer
}