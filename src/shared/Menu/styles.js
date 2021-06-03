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
    .options{
        align-items: center;
        display: flex;
        span{
            padding: 8px 20px;
            font-weight: 600;
            &:hover{
                cursor: pointer;
            }
        }
    }

    /* Media query */

    @media screen and (max-width: 1380px) {
        flex-direction: column;
        justify-content: center;
        .logo{
            text-align: center;
            h1{
                text-align: center;
                font-size: 30px;
            }
        }
        .options{
            span{
                img{
                    width: 20px;
                }
            }
        }
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
            display: flex;
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