import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    padding: 40px 80px;
    background-color: black;
    height: auto;
    color: white;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    display: flex;
    a{
        text-decoration:none;
    }
    div {
        width: 300px;
        line-height: 15px;
        margin-bottom: 50px;
    }
    div span {
        display: block;
        color: white;
        padding: 8px;
        cursor: pointer;
    }
    .headerMenuFooter {
        font-size: 20px;
        padding: 20px 8px;
        display: block;
    }
    .Mission {
        padding: 8px;
        line-height: 25px;
    }
    .marca {
        margin-left: 0px;
        padding: 15px 0px;
        font-size: 34px;
        color: white;
        font-weight: bold;
        text-shadow: -1px -1px 0px #000, 0px -1px 0px #000, 1px -1px 0px #000,
        -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000, 0px 1px 0px #000,
        1px 1px 0px #000;
    }
    .socialMedia {
        width: 50px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        padding: 8px;
    }
    .socialMedia a {
        color: white !important;
    }

    @media screen and (max-width: 1160px) {
        footer {
        justify-content: center;
        align-content: center;
        flex-direction: column;
        }
    }
`;
