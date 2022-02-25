import styled from 'styled-components';
import { colors } from 'variables';

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
    .create-address{
        display: flex;
        justify-content: center;
        cursor: pointer;
        width: 40%;
        background: ${colors.black};
        color: ${colors.white};
        margin-bottom: 20px;
    }
    .customer-address{
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
            cursor: pointer;
        }
        span:nth-child(3):hover{
            text-decoration: underline;
        }
    }
    .customer-freight{
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
        bottom: 80px;
        display: flex;
        a{
            width: 100%;
            color: black;
            font-weight: 600;
            padding: 20px;
            text-decoration: none;
            img{
                transform: rotate(180deg);
                margin-right: 10px;
            }
        }
    }

    /* right */

    .customer-bag-right{
        position: fixed;
        right: 0;
        width: 550px;
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
        height: 550px;
        padding: 30px 40px;
        padding-bottom: 0px;
        overflow: auto;
    }
    .product-item{
        flex-direction: row;
        color: white;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid black;
        justify-content: space-between;
        display: flex;
        img{
            width: 150px;
        }
    }
    .product-info{
        width: 100%;
        padding-left: 12px;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        
        span{
            font-size: 14px;
            font-weight: 600;
        }
    }
    .quantity-products{
        flex-direction: row;
        display: flex;
    }
    .quantity-buttons{
        margin: auto;
        width: 70px;
        justify-content: space-between;
        display: flex;
        button{
            cursor: pointer;
            font-size: 13px;
            border: 2px solid white;
            background-color: white;
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
            width: 340px;
            padding: 20px;
            border: 5px solid black;
            background-color: white;
            box-shadow: -12px 12px white;
            font-weight: bold;
            font-size: 14px;
            cursor: pointer;
            text-transform: uppercase
        }
    }

    /* Media Query */
    @media screen and (max-width: 1320px) {
        flex-direction: column;
        .logo{
            padding: 20px 40px;
            h1{
                text-align: center;
                font-size: 20px;
            }
        }
        .customer-bag-container-infos{
            width: auto;
            padding: 20px 40px;
        }
        .customer-bag-right{
            height: auto;
            width: auto;
        }
        .customer-endereco{
            .pin{
                display: none;
            }
            span{
                font-size: 14px;
            }
        }
        .come-back{
            width: 100%;
            position: unset;
            padding: 8px 0px;
        }
    }
    @media screen and (max-width: 600px){

    }
`;
