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
    .option-payment{
        padding: 20px;
        align-items: flex-end;
        display: flex;
        img{
            width: 60px;
        }
        span{
            padding-left: 10px;
        }
        &:hover{
            background-color: #e0e0e0 ;
            cursor: pointer;
        }
    }
    
`;
