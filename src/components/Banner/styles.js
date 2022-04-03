import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    min-height: 80vh;
    height: auto;
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
        text-transform: uppercase;
        cursor: pointer;
    }
    .banner-image{
        width: 562px;
        height: 562px;
        img{
            width: 100%;
        }
    }
    /* Media Query */
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        .banner-letter{
            width: auto;
            h1{
                font-size: 45px;
            }
        }
        .banner-image{
            margin-top: 5%;
            width: 362px;
            height: 362px;
        }
        .btn-primary{
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 600px){
        padding: 0px;
        flex-direction: column;
        display: flex;
        .banner-letter{
            width: 80vw;
            padding-top: 50px;
            .btn-primary{
                width: 70vw;
            }
        }
        
        .banner-image{
            width: 70vw;
            padding-top: 50px;
            img{
                width: 100%;
            }
        }
    }
`;
