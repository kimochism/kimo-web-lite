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
            cursor: pointer;
            :last-child{
                width: 92%;
            }
        }
        select{
            border: 1px solid black;
            padding: 10px;
            width: 47%;
            margin: 1%;
            cursor: pointer;
            option{
                cursor: pointer;
                padding: 10px;
            }
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
    .address-fallback{
        text-align: center;
        font-weight: bold;
        padding: 12px;
    }
    

`;
