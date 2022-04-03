import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    padding: 0 140px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    a{
        color: black;
        text-decoration: none;
    }
    .logo{
        h1{
            font-size: 45px;
            letter-spacing: 6.5px
        }
    }
    .options-mobile{
        background-color: black;
        width: 100%;
        display: none;
        a{
            filter: invert();
            width: 100%;
            padding: 20px;
            justify-content: space-between;
            align-items: center;
            display: flex;
            img{
                padding-left: 10px;
            }
            span{
                font-weight: 600;
            }
        }

        
    }
    .options{
        align-items: center;
        display: flex;
        a{
            cursor: pointer;
        }
        span{
            padding: 8px 20px;
            font-weight: 600;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .first-name{
        align-items: center;
        display: flex;
        justify-content: space-between;
        div{
            padding-right:10px;
        }
    }
    .bag-customer {
        justify-content: space-between;
        align-items: center;
        display: flex;
        div{
            display: flex;
            padding-right:10px;
        }
    }

    /* Media query */

    @media screen and (max-width: 1380px) {
        overflow: hidden;
        flex-direction: column;
        justify-content: center;
        padding: 0px;
        .logo{
            text-align: center;
            h1{
                text-align: center;
                font-size: 30px;
            }
        }
        .options{
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            display: flex;
            overflow: hidden;
            display: none;
            a{
                padding: 20px;
                border-bottom: 1px solid #e0e0e0;
                text-align: left;
                width: 90%;
                img{
                    width: 20px;
                }
            }
            &:hover{
                background-color: #e0e0e0;
            }
            &:active{
                background-color: #e0e0e0;
            }
        }
        .options-mobile{
            display: flex;
        }
    }
    @media screen and (max-width: 850px) {
        padding: 0px;
        width: 100%;
    }
    @media screen and (max-width: 750px) {
        flex-direction: column;
        .logo{
            h1{
                font-size: 20px;
                width: 300px;
                text-align: center;
            }
        }
        
    }
    @media screen and (max-width: 420px) {
        flex-direction: column;
        .logo{
            h1{
                font-size: 20px;
                text-align: center;
                span{
                    display: none;
                }
            }
        }
        .options{
            align-items: center;
            span{
                padding: 8px 10px;
                font-weight: 600;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        
    }

`;