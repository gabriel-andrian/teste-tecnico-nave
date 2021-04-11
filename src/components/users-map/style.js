import styled from 'styled-components';
import { Empty } from "antd";


export const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        
    }


`


export const EmptyStled = styled(Empty)` 
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 60vh;
`