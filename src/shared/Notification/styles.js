import styled from 'styled-components';

export const Container = styled.div`
    margin-right: 25px;
    width: 400px;
    padding: 0px;
    margin: 0px;
    display: flex;
    img{
        width: 110px;
        height: 110px;
        margin-right: 15px;
    }
    label{
        color: black;
    }
    div{
        text-align: left !important;
        width: 360px;
        display: flex;
        flex-direction: column;
        color: black;
        span:nth-child(1){
            width: 100%;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .msg-toast{
            width: 100%;
            font-size: 14px;
        }
        .button-finish{
            cursor: pointer;
            position: absolute;
            width: 120px;
            height: 25px;
            background-color: white;
            border: 3px solid black;
            right: 20px;
            bottom: 15px;
            button{
                font-weight: bold;
                letter-spacing: 2px;
                width: 125px;
                padding: 8px;
                position: absolute;
                color: white;
                background-color: black;
                border: 0px;
                margin-left: -10px;
                margin-top: -10px;
            }
        }
    }
`;
