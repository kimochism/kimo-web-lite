import styled from 'styled-components';
import { colors } from 'variables';

export const Container = styled.div`
    margin: 50px 0px;
    justify-content: center;
    flex-direction: column;
    display: flex;
    h2{
        font-size: 34px;
        text-align: center;
        padding: 20px;
    }
    .gallery-container{
        max-width: 1360px;
        justify-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
        flex: 1 1 340px;
        display: flex;
        a{
            text-decoration: none;
            color: ${colors.black}
        }
    }
    .gallery-box{
        width: 300px;
        height: auto;
        margin: 1%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        align-items: end;
        display: flex;
        cursor: pointer;
        img{
            width: 300px;
            height: 300px;
        }
    }
    .gallery-box-title{
        width: 100%;
        text-align: center;
        flex-direction: column;
        display: flex;
        label{
            font-weight: 600;
            padding: 8px;
            letter-spacing: 2px;
        }
        span{
            font-size: 14px;
            font-weight: 500;
            padding: 8px;
            padding-bottom: 50px;
        }
        i{
            text-decoration: line-through;
        }
        b{
            margin-left: 15px;
            padding: 4px 9px;
            border-radius: 50px;
            font-weight: 500;
            background-color: #d5bbff;
            border: 1px solid #ab7cf7;
            font-size: 13px;
        }
    }

    a {
        width: auto;
        text-decoration: none;
        display: flex;
    }
    button{
        width: auto;
        margin: 70px auto;
        padding: 18px 100px;
        border: 5px solid black;
        background-color: white;
        box-shadow: -15px 15px black;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
    }


    @media screen and (max-width: 1490px) {
        .gallery-container{
            max-width: 1086px;
        }
    }
    @media screen and (max-width: 1092px) {
        .gallery-container{
            max-width: 710px;
        }
    }
    @media screen and (max-width: 720px) {
        .gallery-container{
            max-width: 346px;
        }
        button{
            width: 70vw;
        }
    }
`;
