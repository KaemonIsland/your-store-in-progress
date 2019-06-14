import styled from 'styled-components'


export const Button = styled.button`
    width: 100%;
    border-radius: 1rem;
    background-color: white;
    border: 1px solid black;
    transition: all 300ms ease-in;
    outline: none;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: black;
        color: white;
    }
`