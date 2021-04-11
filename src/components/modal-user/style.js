import styled from 'styled-components';
import {Modal} from 'antd'

export const ModalStyled = styled(Modal)`

    
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    


    img {
        width: 90%;
    }

    h1, h3 {
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0;
    }

    p {
        font-size: 1.2rem;

    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        

        .ant-modal-body .ant-modal-root {
            padding: 0;
        }

        .ant-modal-body {
            padding: 0;
        }

        .ant-modal-close-x {
            width: 35px;
            line-height: 40px;
        }

        img {
            max-width: 50%;
        }

        h1, h3 {
        font-size: 0.9rem;
        margin-left: 1rem;
        }

        p {
            font-size: 0.8rem;
            margin-left: 1rem;

        }

    }
`

export const InfosContainers = styled.div`
    @media only screen and (min-width: 600px) {
        display: flex;
        flex-direction: column;
        margin-top: 1.4rem;

    }
`


export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;

    div, a {
        font-size: 1.8rem;
        color: rgb(108 97 202);
        margin: 0 2%;
        
    }


    @media only screen and (min-width: 600px) {

        justify-self: flex-end;
        margin-top: 5rem;

        div, a {
            font-size: 1rem;
            color: rgb(108 97 202);
            margin-left: 1rem;
        }
    }
`

export const ImgContainer = styled.div`
    max-width: 300px; 
` 