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
`

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;

    div, a {
        font-size: 1.8rem;
        color: black;
        margin: 0 2%;
        
    }
`