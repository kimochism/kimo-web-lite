import styled from 'styled-components';

export const Container = styled.div`
    .pay-with {
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
    }
    .change-payment-method {
        cursor: pointer;
    }
    .change-payment-method:hover {
        text-decoration: underline;
    }
    .option-payment {
        padding: 20px;
        align-items: center;
        display: flex;
        img{
            width: 60px;
        }
        span{
            padding-left: 10px;
        }
        &:hover{
            background-color: #e0e0e0;
            cursor: pointer;
        }
    }
    .active {
        background-color: #e0e0e0;
    }

    button {
        padding: 12px;
        width: 100%;
        margin: 20px auto;
        border: 2px solid black;
        background-color: black;
        color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
        box-shadow: -6px 5px 0 #fff, -12px 10px 0 rgba(0,0,0,1);
    }
`;
