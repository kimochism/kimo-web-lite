import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    display: flex;
    .customer-bag-left{
        width: 100%;
        flex-direction: column;
        display: flex;
    }
    .logo{
        padding: 30px 140px;
        a{
            text-decoration: none;
            color: black;
        }
        h1{
            font-size: 45px;
            letter-spacing: 6.5px;
            margin: 0px;
        }
    }
    .customer-bag-container-infos{
        width: 600px;
        padding: 20px 140px;
    }
    .customer-endereco{
        flex-direction: column;
        display: flex;
        span{
            padding: 12px 0px;
            font-size: 18px;
        }
        span:nth-child(2){
            border: 2px solid black;
            text-align: center;
            font-weight: 600;
            justify-content: center;
            align-items: center;
            display: flex;
        }
        span:nth-child(3){
            font-size: 14px;
            text-align: right;
            justify-content: flex-end;
            align-items: center;
            display: flex;
        }
    }
    .customer-frete{
        padding: 12px 0px;
        border-bottom: 1px solid #f0f0f0;
        justify-content: space-between;
        align-items: center;
        display: flex;
        span{
            img{
                margin-right: 8px;
            }
        }
    }

    .customer-payment-options{
        padding: 15px 0px;
        flex-direction: column;
        display: flex;
        span{
            padding-bottom: 15px;
        }
    }
    
    .option-payment{
        padding: 20px;
        align-items: flex-end;
        display: flex;
        img{
            width: 60px;
        }
        span{
            padding-left: 10px;
        }
        &:hover{
            background-color: #e0e0e0 ;
            cursor: pointer;
        }
    }
    .come-back{
        position: absolute;
        bottom: 80px;
        a{
            color: white;
            background-color: black;
            padding: 20px;
            text-decoration: none;
            img{
                filter: invert(1);
                transform: rotate(180deg);
                margin-right: 10px;
            }
        }
    }

    /* right */

    .customer-bag-right{
        width: 800px;
        height: 100vh;
        background-color: black;
    }
    .header-products{
        font-size: 26px;
        padding: 40px;
        color:  white;
        align-items: center;
        display: flex;
        img{
            filter: invert(1);
            padding-right: 10px;
        }
    }
    .list-products{
        background-color: #0f0f0f;
        max-height: 450px;
        padding: 30px 40px;
        padding-bottom: 0px;
        overflow: auto;
    }
    .product-item{
        color: white;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid black;
        display: flex;
        img{
            width: 150px;
        }
    }
    .product-info{
        padding-left: 20px;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        span:nth-child(1){
            font-size: 20px   
        }
        span{
            font-size: 14px;
            font-weight: 600;
        }
    }

    .checkout-products{
        padding: 40px;
        font-weight: 600;
        flex-direction: column;
        display: flex;
        div{
            padding: 12px 0px;
            color: white;
            justify-content: space-between;
            display: flex;  
        }
        div:nth-child(1){
            border-bottom: 1px solid white;
        }
        button{
            margin: 0px auto;
            margin-top: 20px;
            width: 360px;
            padding: 20px;
            border: 5px solid black;
            background-color: white;
            box-shadow: -15px 15px white;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            text-transform: uppercase
        }
    }
`;
