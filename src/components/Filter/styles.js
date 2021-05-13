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
        border: 3px solid black;
        display: flex;
        input{
            width: 100%;
            padding: 12px;
            border: 0px;
        }
        button{
            padding: 8px 18px;
            background-color: black;
            border-radius: 0px;
            border: 0px;
            cursor: pointer;
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
        padding: 8px;
        display: flex;
        input{
            border: 1px solid black;
            color: black;
        }
        span{
            padding-left: 12px;
        }
    }

    @media screen and (max-width: 780px){
        display: none;
    }
`;
