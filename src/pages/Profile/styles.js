import styled from 'styled-components';
import { colors } from 'variables';

export const Container = styled.div`
    background-color: white;
    .container-profile{
        padding: 80px;
        padding-bottom: 120px;
        justify-content: center;
        display: flex;
    }
    .profile-left{
        width: 265px;
        height: auto;
    }
    .input-disabled{
        background: ${colors.gray2};
    }
    .profile-btn-option{
        button{
            width: 100%;
            background-color: black;
            margin-top: 29px;
            padding: 18px;
            border: 3px solid black;
            background-color: white;
            box-shadow: -15px 15px black;
            font-weight: 600;
            letter-spacing: 0.5px;
            font-size: 16px;
            cursor: pointer;
            text-transform: Capital;
            display: flex;
            span{
                width: 100%;
            }
        }
        button:nth-child(1){
            margin-top: 0px;
        }
    }

    /* right */

    .profile-right{
        width: 550px;
        padding: 0px 100px;
        padding-right: 0px;
        align-items: flex-end;
        flex-direction: column;
        display: flex;
        button{
            cursor: pointer;
            width: 264px;
            height: 50px;
            margin-top: 25px;
            padding: 18px;
            background-color: black;
            border: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .profile-picture-and-name{
        width: 550px;
        align-items: center;
        display: flex;
        span{
            margin-left: 25px;
            font-weight: bold;
        }
    }
    .profile-picture{
        width: 100px;
        height: 100px;
        background-color: black;
        background-image: url('https://i.pinimg.com/564x/49/c7/fe/49c7fe3c6fdbd9c9d84d60c8caf4872d.jpg');
        background-size: cover;
        border: 4px solid black;
        border-radius: 50%;
    }
    .profile-account-form{
        width: 550px;
        height: 260px;
        padding-top: 50px;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        label{
            font-weight: 600;
            padding-bottom: 8px;
        }
        input{
            padding: 15px;
            border: 2px solid black;
        }
        div{
            justify-content: space-between;
            width: 100%;
            display: flex;
            div{
                width: 48%;
                flex-direction: column;
                display: flex;
                input{
                    width: auto;
                }
            }
        }
    }
    .profile-input-is-not{
        flex-direction: column;
        .input-with-icon{
            position:relative;
            width: 100%;
            direction: rtl;
            input{
                text-align: left;
            }
            img{
                position:absolute;
                bottom:25%;
                right:15px;
                width:24px;
                height:24px;
                cursor: pointer;
            }
        }
    }
`;
