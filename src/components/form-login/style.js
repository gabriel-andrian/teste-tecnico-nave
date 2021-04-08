import styled from 'styled-components'


export const FormContainer = styled.form`
    border: 1px solid black;
    max-height: 70vh;
    min-height: 55vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    max-width: 500px;

    

    input:focus {
        outline-color: rgb(108 97 202)
    }

    input {
        margin: 0 auto;
        width: 89%;
        border-width: 1px;
    }

    label {
        width: 89%;
        margin: 0 auto;
        font-weight: 700;
    }

    p {
        color: red;
        width: 90%;
        margin: 0 auto
    }



    input:nth-child(8) {
        background: rgb(108 97 202);
        color: white;
        border: none;
        height: 5rem;
        border-radius: 10px;
        font-size: 2rem;
        margin: 1rem;
        cursor: pointer;
        outline: none;
        font-weight: 700;
    }

    @media only screen and (min-width: 600px) {

        input {
        margin-bottom: 1rem;
        }

        input:nth-child(8) {
            height: 2.5rem;
            font-size: 1rem;
            border-radius: 0px;
            align-self: center;
            margin-bottom: 3rem;
            
        }
    }

`

export const ImgStyled = styled.img`
    width: 75%;
    margin: 10% 0;
    align-self: center;

    @media only screen and (min-width: 600px) {
        width: 45%;
    }
`
