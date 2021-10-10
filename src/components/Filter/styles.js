import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    .container-filter-name{
        padding: 12px 0px;
        padding-top: 0px;
        font-weight: bold;
    }
    .filter-search{
        border: 2px solid black;
        display: flex;
        input{
            width: 100%;
            padding: 12px;
            border: 0px;
        }
        button{
            padding: 8px 18px;
            background-color: transparent;
            border-radius: 0px;
            border: 0px;
            cursor: pointer;
            img{
                filter: invert(1);
            }
        }
    }
    .filter{
        width: 275px;
        border-right: 1px solid #dbdbdb;
        height: 500px;
        margin-top: 20px;
        background-color: white;
    }
    .item-filter{
        cursor: pointer;
        padding: 8px;
        align-items: center;
        display: flex;
        &:hover{
            background-color: #efefef;
        }
        input{
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }
        .title-filter-item{
            padding-left: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 780px){
        display: none;
    }


    /* Checkbox */
    .checkbox-wrapper{
        top: 50%;
        left: 50%;
    }
    .checkmark{
        display: block;
        width: 20px;
        height: 20px;
        background-color: #c9c9c9;
        border-radius: 0px;
        position: relative;
        transition: background-color 0.4s;
        cursor: pointer;
    }
    .checkmark::after{
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        border-right: 3px solid white;
        border-bottom: 3px solid white;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%) rotateZ(40deg);
        opacity: 0;
        transition: all 0.4s;
    }

    /* camiseta */
    #camiseta:checked ~ .checkmark{
        background-color: black;
    }
    #camiseta:checked ~ .checkmark::after{
        opacity: 1;
    }

    /* moletom */
    #moletom:checked ~ .checkmark{
        background-color: black;
    }
    #moletom:checked ~ .checkmark::after{
        opacity: 1;
    }

    /* acessorios */
    #acessorios:checked ~ .checkmark{
        background-color: black;
    }
    #acessorios:checked ~ .checkmark::after{
        opacity: 1;
    }

    /* canecas */
    #canecas:checked ~ .checkmark{
        background-color: black;
    }
    #canecas:checked ~ .checkmark::after{
        opacity: 1;
    }

    /* diversos */
    #diversos:checked ~ .checkmark{
        background-color: black;
    }
    #diversos:checked ~ .checkmark::after{
        opacity: 1;
    }

    /* outros */
    #outros:checked ~ .checkmark{
        background-color: black;
    }
    #outros:checked ~ .checkmark::after{
        opacity: 1;
    }
`;

