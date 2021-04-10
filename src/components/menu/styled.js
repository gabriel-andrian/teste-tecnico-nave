import styled from 'styled-components'


export const MenuContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%auto;
    height: 10vh;
    margin: 0 3%;

    img {
        height: 40%;
        margin: 1%;

    }

    a {
        margin: 0;
        font-size: 2rem;
        color: black;
    }

    @media only screen and (min-width: 600px) {
        margin: 0 1%;

       a {
           font-size: 1rem;
           font-weight: 700;
       }
    }

`

export const ImgStyled = styled.img`
    width: 30%;
    height: 5%;
    margin: 10% 0;
    align-self: center;
`