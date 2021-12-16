import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: auto;
    height: 80vh;
	img{
        width: 350px;
        margin: 0px auto;
    }
    p{
        font-size: 30px;
        margin: 10 auto;
        font-weight: bold;
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
        margin: 30px auto;
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
