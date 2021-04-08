import styled from 'styled-components'


export const FormContainer = styled.form`
    border: 1px solid black;
    max-height: 70vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    max-width: 500px;
    

    input:focus {
        outline-color: rgb(108 97 202)
    }

    input {
        margin: 0 auto 1.2rem;
        width: 90%;
    }

    label {
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
    }

`

export const ImgStyled = styled.img`
    width: 75%;
    margin: 10% 0;
    align-self: center;
`
