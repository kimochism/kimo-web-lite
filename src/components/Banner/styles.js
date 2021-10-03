import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    height: 80vh;
    padding: 0 140px;
    padding-bottom: 20px;
    justify-content: space-around;
    align-items: center;
    display: flex;

    .banner-letter{
        width: 640px;
        flex-direction: column;
        align-items: center;
        display: flex;
        h1{
            margin: 0px;
            font-size: 85px;
            letter-spacing: 2px;
        }
    }
    .btn-primary{
        margin-top: 120px;
        width: 360px;
        padding: 20px;
        border: 5px solid black;
        background-color: white;
        box-shadow: -15px 15px black;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase
    }
    .banner-image{
        width: 562px;
        height: 562px;
        img{
            width: 100%;
        }
    }
`;
