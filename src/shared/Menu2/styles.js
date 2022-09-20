import styled from 'styled-components';
import { colors } from 'variables';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${colors.white};
    position: fixed;
    text-decoration: none;

    .header {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 20px;
            letter-spacing: 6.5px;
            color: black;
        }
        
        a {
            text-decoration: none;
        }

        img {
            width: 24px;
            height: 24px;
            padding-right: 8px;
            position: absolute;
            right: 10px;
        }
    }

    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        
        li {
            display: flex;
            align-items: center;
            list-style-type: none;
            padding: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);

            img {
                width: 24px;
                height: 24px;
                padding-right: 8px;
            }
        }
    }   
`;