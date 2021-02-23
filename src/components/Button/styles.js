import styled from 'styled-components';

export const StyledButton = styled.button ` 
    padding: 20px 50px;
    font-size: 0.875em;
    background: ${props => !props.darkTheme ? 'var(--green)' : 'var(--black)'};
    cursor: pointer;
    display: block;
    font-size: 0.875em;
    transition: .2s;
    border-radius: 50px;
    color: ${props => !props.darkTheme ? 'var(--black)' : 'var(--white)'};
    font-family: Inter;

    &:hover {
        background: ${props => !props.darkTheme ? 'var(--green-hover)' : 'var(--black-hover)'};
        color: var(--gray);
    }
`;