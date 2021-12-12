import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: auto;
    height: 70vh;
	img{
        width: 500px;
        margin: auto;
    }
    p{
        margin: 0 auto;
        text-align: center;
    }
    button{
        margin:  0 auto;
        cursor: pointer;
        border: 0px;
        background-color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase
    }
    .come-back{
        bottom: 80px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        display: flex;
        a{
            width: 100%;
            color: black;
            font-weight: 600;
            padding: 20px;
            text-decoration: none;
            img{
                width: 6px;
                transform: rotate(180deg);
                margin-right: 10px;
            }
        }
    }
`;
