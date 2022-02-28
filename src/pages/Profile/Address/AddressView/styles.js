import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    flex-direction: column;
    display: flex;

    h1{
        margin: 8px;
    }

    .address-attention{
        font-size: 12px;
        display: flex;
        flex-direction: column;
        padding: 12px;
        padding-top: 0px;
        label{
            padding-bottom: 5px;
        }
    }
    .address-form{
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
        input{
            border: 1px solid black;
            width: 43%;
            padding: 10px;
            margin: 1%;
        }
    }
    .address-input-long{
        width: 92% !important;
    }
    .address-actions{
        justify-content: space-between;
        display: flex;
        button{
            color: white;
            margin: 1.5%;
            margin-top: 5%;
        }
    }
    

`;
