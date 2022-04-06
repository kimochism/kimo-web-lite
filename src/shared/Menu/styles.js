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
        padding: 20px;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        display: none;
        div{
            padding: 0px 7.5vw;
        }
        img{
            filter: invert();
            width: 20px;
        }
        span{
            font-weight: 600;
        }
    }
    .options-mobile-left{
        img{
            width: 24px;
        }
    }
    .options-mobile-right{
        .option-search{
            padding-right: 20px;
            width: 20px;
            filter: unset;
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
    .option-generic {
        justify-content: space-between;
        align-items: center;
        display: flex;
        div{
            padding-right:10px;
        }
        img{
            width: 22px;
            display: none;
        }
    }
    .opt-desktop{
        img{
            display: flex;
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
        }
        .options-mobile{
            display: flex;
        }
    }
    @media screen and (max-width: 1380px){
        .option-generic{
            img{
                display: block;
            }
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