import { Modal } from "antd";
import styled from "styled-components"


export const ModalStyled = styled(Modal)`
    .ant-modal-header{
        border-bottom: none
    }

    .ant-modal-footer{
        border-top: none
        
    }

    .ant-modal-footer > button {
        width: 33%
    }


`