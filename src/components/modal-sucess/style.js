import { Modal } from "antd";
import styled from "styled-components"


export const ModalStyled = styled(Modal)`

    .ant-modal-header{
        border-bottom: none
    }

    .ant-modal-title{
        font-size: 1.5rem;
    }
    p {
        font-size: 1.2rem;
    }

    .ant-modal-footer{
        border-top: none
        
    }

    .ant-modal-footer > button {
        height: 30%;
        width: 45%;
        font-size: 1.2rem;
    }
    
    .ant-btn-primary {
       background-color: rgb(108 97 202);
       border-color: rgb(108 97 202);
    }


    @media only screen and (min-width: 600px) {
        .ant-modal-title{
            font-size: 1rem;
        }

        .ant-modal-body{
            height: 3rem;
        }
        p {
            font-size: 0.9rem;
            margin-left: 1.3rem;
        }

    }
`