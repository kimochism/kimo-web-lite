import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .container-address-card{
        height: 120px;
        border: 3px solid black;
        margin-bottom: 10px;
        display:flex;
    }
    .container-left-address-card{
        width: 90%;
        padding: 0px 10px;
        p{
            flex-direction: column;
            display: flex;
            span{
                padding: 1px 5px;
            }
            span:nth-child(1){
                font-weight: bold;
            }
        }
        
    }
    .container-right-address-card{
        width: 12%;
        background-color: black;
        color: white;
        div{
            width: 100%;
            height: 50%;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            display: flex;
        }
        div:nth-child(2){
            background-color: white;
            color: black;
        }
    }
    .add-new-address{
        button{
            width: 100%;
            color: white;
            font-size: 16px;
            letter-spacing: 2px;
            font-weight: 600;
        }
    }

`;
