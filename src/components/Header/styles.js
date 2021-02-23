import styled from 'styled-components';

export const StyledHeader = styled.header `

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    
    position: absolute;
    top: 0;
    right: 10vw;
    width: 80vw;

    ul {
        list-style: none;
        display: flex;
    }

    ul li a svg {
        fill: var(--white);
        transition: .2s;
        width: 1.125em;
        height: 1.125em;
    }

    ul li a {
        padding: 12px;
        &:hover svg {
            fill: var(--green)
        }

    }

    @media(max-width: 1024px) {
        & {
            width: 95vw;
            right: 2.5vw;
        }
    }

    @media(max-width: 560px) {
        & {
            width: 90vw;
            right: 5vw;
        }
    }
`;