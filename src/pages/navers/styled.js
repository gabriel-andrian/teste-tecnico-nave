import styled from 'styled-components'


export const ContainerContextHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2%;

    h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        color: rgb(108 97 202);
    }

    button {
        width: 50vw;
        height: 6vh;
        color: white;
        font-size: 1.3rem;
        border: 1px solid;
        outline: none;
        background-color: rgb(108 97 202);
        cursor: pointer;

    }

    @media only screen and (min-width: 600px) {
        margin-right: 0.5%;

        h1 {
            font-size: 2.8rem;
        }

        button { 
            width: 20vw;
            margin-right: 0;
        }
    }


`