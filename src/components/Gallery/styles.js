import styled from 'styled-components';

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
        max-width: 1480px;
        justify-content: left;
        margin: 0 auto;
        flex-wrap: wrap;
        flex: 1 1 340px;
        display: flex;
    }

    
    .gallery-box{
        width: 340px;
        height: 430px;
        margin: 1%;
        background-image: url('https://cdn.shopify.com/s/files/1/0508/9745/3208/products/Ayaka_web_360x.png?v=1637992406');
        background-repeat: no-repeat;
        align-items: end;
        display: flex;
        div{
            width: 340px;
            text-align: center;
            padding: 12px;
            flex-direction: column;
            display: flex;
        }
        label{
            font-weight: 600;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        span{
            font-size: 14px;
            font-weight: 500;
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
    /* apenas pra testes */
    .gallery-box:nth-child(2n){
        background-image:url('https://cdn.shopify.com/s/files/1/0508/9745/3208/products/AyakaPEEKER_web_360x.png?v=1637992591')
    }

    /* fim testes */

    a {
        width: auto;
        text-decoration: none;
        display: flex;
    }
    button{
        width: auto;
        margin: 50px auto;
        width: 360px;
        padding: 20px;
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
