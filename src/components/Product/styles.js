import styled from 'styled-components';

export const Container = styled.div`

    .box-item-product{
        margin: 10px;
        width: 310px;
        flex: 1 1 320px;
        flex-wrap: wrap;
        flex-direction: column;
        display: flex;
        cursor: pointer;
        letter-spacing: 1px;
        span{
            font-weight: 600;
            padding: 8px 0px;
        }
    }
    
    .box-item-product-image{
        margin: 0px;
        width: 100%;
        background-size: cover;
        background-position: center;
    }

`;
