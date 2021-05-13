import styled from 'styled-components';

export const Container = styled.div`
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
        padding-bottom: 140px;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
    }
    
    
    /* Media Query */
    @media screen and (max-width: 1624px) {
        .container-catalog-right{
            
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    /* Checkbox */
    
`;
