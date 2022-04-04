import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
    font-weight: 600;
    display: flex;
    #closeModal{
        top: 0px;
        right: 0px;
        border: 0px;
        margin: 8px;
        padding: 12px;
        position: absolute;
        background-color: transparent;
    }
    .copyCut{
        filter: invert();
    }
    .paymentId{
        margin-top: 20px;
    }
    .containerQrCode{
        width: 60%;
        align-items: center;
        display: flex;
        #copyQrCode{
            width: 80%;
            font-weight: 600;
            padding: 12px;
            margin: 20px 0px;
            border: 1px solid black;
        }
        button{
            width: 42px;
            height: 42px;
            border: 0px;
            color: white;
            background-color: black;
        }
    }
    .header{
        background-color: red;
        text-align: center;
        span{
            background-color: red;
            text-align: center;
        }
    }
    .btn-primary{
        margin: 20px 10px;
        min-width: 250px;
        padding: 16px;
        border: 5px solid black;
        background-color: white;
        box-shadow: -15px 15px black;
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
    }
`;
