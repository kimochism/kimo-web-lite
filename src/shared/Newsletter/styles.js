import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px;
    background-color: #f9f9f9;
    .container-newsletter{
        height: 300px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
        h2{
            text-transform: uppercase;
            text-align: center;
            padding: 8px;
            margin: 0px;
        }
        span{
            margin: 0px;
            padding: 8px;
            font-weight: 500;
            text-align: center;
        }
    }
    .container-newsletter-email{
        margin-top: 12px;
        justify-content: center;
        flex-direction: row;
        display: flex;
        input{
            width: 200px;
            border: 1px solid black;
            padding: 12px;
        }
        button{
            padding: 12px;
            border: 0px;
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
`;
