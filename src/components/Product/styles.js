import styled from 'styled-components';

export const Container = styled.div`

    .box-item-product{
        margin: 10px;
        max-width: 332px;
        min-width: 250px;
        flex: 1 1 332px;
        flex-wrap: wrap;
        flex-direction: column;
        display: flex;
        cursor: pointer;
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
