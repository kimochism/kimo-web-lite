import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    margin: 0 auto;
    .title-catalog{
        text-align: center;
    }
    .container-catalog{
        padding: 0 140px;
        justify-content: center;
        display: flex;
    }
    /* right */
    .container-catalog-right{
        width: 1200px;
        padding: 0px 0px;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
        a{
            color: black;
            text-decoration: none;
        }
    }
    /* Media Query */
    @media screen and (max-width: 1540px) {
        .container-catalog-right{
            width: 900px;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (max-width: 1240px){
        .container-catalog-right{
            width: auto;
            padding: 0px;
        }
    }
    /* aux */
    .aux-cont{
        flex-direction: column;
        align-items: center;
        padding-bottom: 70px;
        display: flex;
    }
    .pages-buttons{
        padding-top: 50px;
        button{
            width: 40px;
            height: 40px;
            font-size: 16px;
            border: 0px;
            background-color: transparent;
            font-weight: 600;
            cursor: pointer;
            margin: 5px;
            border: 1.5px solid black;
        }
    }
`;
