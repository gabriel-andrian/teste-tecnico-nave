import styled, { css } from 'styled-components'

export const SpanStyled = styled.label`
     width: 89%;
     margin: 0 auto;
     color: red;

     ${({error}) =>             
              error ?
              css`
                 color: red;
             `
             : css`
                 color: rgba(0, 0, 0, 0.85);
             `
             }

 `


export const ContextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const FormContainer = styled.div`
    max-width: 700px;
    width: 100%;
    padding: 25px 30px;

    @media only screen and (max-width: 600px) {
        padding: 0px 15px;

    }


`

export const UserDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 5px 10px 5px;

    @media only screen and (max-width: 600px) {

        flex-wrap: nowrap;
        flex-direction: column;
        margin: 0px 0px;

    }


`

export const InputBox = styled.div`
    width: calc(100% / 2 - 20px);
    margin: 10px 0 12px 0;

    label{
        font-weight: 700;

    }

    input { 
        margin-top: 5px;
        height: 45px;
        width: 100%;
        border: 1px solid black;
        font-size: 1rem;
    }

    input:focus {
        outline-color: rgb(108 97 202);
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 10px 0;

        input {
            height: 40px;
            font-size: 1.6rem;
            margin-top: 2px;
        }

        label{
            font-weight: 700;
            font-size: 1.5rem;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 50px;
    margin: 0;


    input{
        font-size: 1.3rem;
        height: 3.5rem;
        width: 25%;
        color: white;
        background-color: rgb(108 97 202);
        cursor: pointer;
        border: none;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        flex-direction: row;
        height: 80px;

        input {
            margin-top: 10px;
            width: 100%;
            border-radius: 15px;
            font-size: 2rem;
        }
    }
`

export const SectionTitle = styled.h1`
    width: 100%;
    font-size: 2rem;
    margin-left: 1px;
    color: rgb(108 97 202);
    
        a {
            margin-right: 1rem;
            color:rgb(108 97 202);
        }
`