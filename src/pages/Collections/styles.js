import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    .collections-h1{
        padding: 50px;
        padding-bottom: 0px;
        margin: 0px;
        text-align: center;
    }
    .container-collections{
        min-height: 58vh;
        justify-content: center;
        align-items: center;
        padding-bottom: 130px;
        margin: 0 auto;
        flex-wrap: wrap;
        display: flex;
    }
    .box-collection{
        width: 300px;
        height: 368px;
        margin: 15px;
        justify-content: space-between;
        flex-direction: column;
        position: relative;
        display: flex;
        overflow: hidden;
        span{
            letter-spacing: 2px;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            padding: 20px;
        }
        img{
            width: 300px;
            height: 300px;
        }
    }
    a{
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .hoverEffect{
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
        bottom: 0px;
        width: 300px;
        height: 300px;
        position: absolute;
    }
`;
