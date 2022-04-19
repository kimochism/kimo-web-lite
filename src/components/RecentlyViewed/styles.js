import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    .medium-hr{
        width: 50vw;
        margin-top: 80px;
        border-radius: 50px;
        border: 0px solid #ebebeb;
    }
    h1{
        width: 65%;
        margin: 0px;
        font-size: 26px;
        text-align: center;
        padding: 30px;
        padding-bottom: 30px;
        text-transform: uppercase;
    }
    .latest-suggestions{
        width: auto;
        overflow: auto;
        justify-content: left;
        display: flex;
    }
    a{
        text-decoration: none;
        color: black
    }
    .suggestion{
        max-width: 260px;
        width: 50vw;
        margin: 12px;
        justify-content: flex-start;
        flex-direction: column;
        display: flex;
    }
    .suggestion-image{
        img{
            width: 100%;
        }
    }
    .suggestion-name{
        text-align: center;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        padding: 8px;
        letter-spacing: 2px;
    }
    .suggestion-prices{
        padding: 8px;
        font-size: 13.4px;
        justify-content: center;
        display: flex;
        span{
            padding: 8px 8px;
            font-weight: 500;
        }
    }
    .suggestion-cut-price{
        text-decoration: line-through;
    }

    @media screen and (max-width: 985px){
        .latest-suggestions{
            min-width: unset;
            width: 85vw;
            justify-content: left;
            overflow: auto;
        }
    }
`;
