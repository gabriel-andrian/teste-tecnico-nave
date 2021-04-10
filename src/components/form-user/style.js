import styled from 'styled-components'


export const FormContainer = styled.form`
    max-height: 70vh;
    min-height: 55vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    max-width: 500px;

    input:focus {
        outline-color: rgb(108 97 202);
    }

    input {
        margin: 0 auto;
        width: 89%;
        border-width: 1px;
    }

    label {
        width: 89%;
        margin: 0 auto
    }

    p {
        color: red;
        width: 90%;
        margin: 0 auto
    }

    input:last-child {
        background: rgb(108 97 202);
        color: white;
        border: none;
        height: 5rem;
        border-radius: 10px;
        font-size: 2.5rem;
        margin: 1rem;
        align-self: center;
    }

    @media only screen and (min-width: 600px) {
        font-size: 1rem;
        max-height: 1000vh;
        max-width: 30vw; 
        margin-left: 1vw;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        justify-items: center;

        input:last-child {
            background: rgb(108 97 202);
            color: white;
            border: none;
            height: 3rem;
            border-radius: 10px;
            font-size: 1.5rem;
            margin: 1rem;
            align-self: center;
        }

    }
`