import styled, { createGlobalStyle }  from 'styled-components';
import { colors } from 'variables';


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.gray1};
    }
`;

export const Container = styled.div`
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
`;

export const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
  
    & .path {
        stroke: ${colors.purple3};
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }
  
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;