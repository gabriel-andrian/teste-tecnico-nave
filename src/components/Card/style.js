import styled from 'styled-components'


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    margin: 2% 2%;
    

    img {
        width: 100%;
        max-height: 50vh;
        cursor: pointer;
        min-height: 50vh;

    }

    p {
        margin: 1%;
    }

    span, a {
        font-size: 1.8rem;
        color: rgb(108 97 202);
        margin: 0 1%;
    }

    @media only screen and (min-width: 600px) {
        
        p {
            margin: 0;
            font-size: 1rem;
        }

        span, a {
            font-size: 1rem;
         }

    }



`