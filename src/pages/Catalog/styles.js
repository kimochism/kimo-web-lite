import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    margin: 0 auto;
    
    .container-catalog{
        padding: 0 140px;
        margin-top: 80px;
        justify-content: center;
        display: flex;
    }
    
    /* righht */

    .container-catalog-right{
        padding: 0px 80px;
        padding-bottom: 50px;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
        a{
            color: black;
            text-decoration: none;
        }
    }
    
    
    /* Media Query */
    @media screen and (max-width: 1624px) {
        .container-catalog-right{
            
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    @media screen and (max-width: 600px){
        .container-catalog-right{
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
        button{
            width: 40px;
            height: 40px;
            /* border: 3px solid black; */
            font-size: 16px;
            border: 0px;
    
            background-color: transparent;
            font-weight: 600;
            cursor: pointer;
            margin: 5px;
        }
    }
`;
