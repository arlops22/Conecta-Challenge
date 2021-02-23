import styled from 'styled-components';

const CommentContainer = styled.div `

    display: flex;
    background: var(--black);
    margin-bottom: 90px;
    height: 800px;

    img {
        width: 50%;
    }

    @media(max-width: 560px) {
        & {
            flex-direction: column;
            height: unset;
        }   

        img {
            width: 100%;
        }
    }

`;

const CommentsBox = styled.div `

    width: 50%;
    display: flex;
    flex-direction: column;

    @media(max-width: 560px) {
        & {
            width: 100%;
        }   
    }

`;

const SliderContainer = styled.div `

    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`;

const Slider = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: var(--white);
        margin-bottom: 25px;
        font-size: 1.125em;

        & + p {
            font-size: 0.875em;
            font-family: Lexend Deca;
        }
    }

    @media(max-width: 560px) {
        & {
            height: 300px;
        }
    }
`;

const SlideContent = styled.div `

    width: 60%;
    transition: opacity .5s ease;
    
    opacity: ${props => props.active ? 100 : 0};

    position: absolute;

    @media(max-width: 1024px) {
        & {
            width: 80%;
        }
    }

    @media(max-width: 560px) {
        & {
            width: 85%;
        }
    }
`;

const CommentBgImage = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 400px;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 400px;
        background: rgb(16, 18, 19, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    h2 {
        font-size: 2em;
        color: var(--white);
        font-weight: 700;
        z-index: 1;
    }

    @media(max-width: 1024px) {
        h2 {
            font-size: 1.5em;
        }
    }

    @media(max-width: 560px) {
        & {
            height: 300px;
        }

        &::before {
            height: 300px;
        }
    }

`;

const StyledDots = styled.div `

    width: 80px;
    margin: 0 auto;
    position: absolute;
    bottom: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        display: block;
        width: 8px;
        height: 8px;
        background: var(--gray);
        border-radius: 4px;
        cursor: pointer;

        transition: .2s;
        &:hover {
            background: var(--white);            
        }
    }

    & :nth-child(${props => props.activeSlide}) {
        background: var(--white);
    }

`;

export { CommentContainer, CommentsBox, SliderContainer, Slider, SlideContent, CommentBgImage, StyledDots }