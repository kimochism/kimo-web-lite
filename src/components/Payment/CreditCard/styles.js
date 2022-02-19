import styled from 'styled-components';
import { fontSize } from 'variables';

export const Container = styled.div`
    #form-checkout{
        flex-direction: column;
        display: flex;

        .input-with-icon{
            position: relative;
            width: 95%;
            input{
                text-align: left;
                width: 100%;
            }
            img{
                position:absolute;
                bottom:25%;
                right:-10px;
                width:25px;
            }
        }
        input{
            padding: 8px;
            height: 20px;
            margin: 5px;
            border: 2px solid black;
        }
        select{
            padding: 5px;
            margin: 5px;
            border: 2px solid black;
            height: 40px;
        }
        .error{
            margin-left: 10px;
            color: red;
            font-size: ${fontSize.default};
        }

        .group-inputs{
            display: flex;
            justify-content: space-between;
            input {
                width: 50%;
            }
        }

        .group-inputs-error{
            display: flex;
            justify-content: space-between;

            .error {
                margin-left: 10px;
                color: red;
                font-size: ${fontSize.default};
            }
            span{
                width: 20%;
            }
            span:nth-child(3){
                width: 60%;
            }
        }

        button{
            padding: 12px;
            width: 98%;
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
    }
`;
