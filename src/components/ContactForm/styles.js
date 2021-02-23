import styled from 'styled-components';

const Form = styled.form `

    width: 50%;
    text-align: left;

    button {
        margin-top: 24px;
        margin-left: auto;
    }

    label {
        color: var(--gray);
        text-transform: uppercase;
        font-size: 0.75em;
        margin-bottom: 8px;
        font-family: Roboto;

        transition: .2s;
    }

    input, select, textarea {
        border-top: 1px solid var(--white);
        border-right: 1px solid var(--white);
        padding: 12px;
        transition: .2s;
        margin-bottom: 12px;
        color: var(--gray);
        font-family: Inter;

        &:focus {
            background: var(--gray);
            border-top: 1px solid var(--green);
            border-right: 1px solid var(--green);
            
            color: var(--white)
        }

        &:focus + label {
            color: var(--green);
        }
    }

    select {
        color: var(--gray); 
        appearance: none;

        option {
            color: var(--white);
        }
    }


    @media(max-width: 1024px) {
        & {
            width: 80%;
            display: flex;
            flex-direction: column
        }

        button {
            margin-left: 0;
        }
    }
    @media(max-width: 560px) {
        & {
            width: 100%;
        }
    }
`;

const FormControl = styled.div `

    display: flex;
    flex-direction: column-reverse;

    
    input:focus + label {
        color: var(--green);
    }

    select {
        
        background: url(${props => props.arrowImage});
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: 16px;
        background-size: 12px;

        &:focus {
            background-position-x: 95%;
            background-position-y: 16px;
        }
    }

`;

const FormGroup = styled.div `

    display: flex;
    flex-direction: row;

    & :first-child {
        width: 30%;
        margin-right: 30px;

        input {
            width: 100%;
        }
    }

    & :nth-child(2) {
        width: 70%;

        input {
            width: 100%;
        }
    }

    @media(max-width: 1024px) {
        & {
            flex-direction: column;
        }
        & :first-child {
            width: 100%;
            margin-right: 0;
        }

        & :nth-child(2) {
            width: 100%;
        }
    }

`;

export { Form, FormControl, FormGroup };