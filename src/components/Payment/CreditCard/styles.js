import styled from 'styled-components';

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
            margin: 5px;
            border: 2px solid black;
        }
        select{
            padding: 8px;
            margin: 5px;
            border: 2px solid black;
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
