import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    top: 0;
    left: 0;
    backdrop-filter: blur(2px);
    
    .loading {
        display: flex;
        flex-direction: row;
    }

    .loading-letter {
        font-size: 60px;
        font-weight: normal;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: white;
        animation-name: bounce;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    .loading-letter:nth-child(2) {
        animation-delay: .1s; 
    }
    .loading-letter:nth-child(3) {
        animation-delay: .2s;
    }
    .loading-letter:nth-child(4) {
        animation-delay: .3s; 
    }
    .loading-letter:nth-child(5) {
        animation-delay: .4s;
    }
    .loading-letter:nth-child(6) {
        animation-delay: .5s; 
    }
    .loading-letter:nth-child(7) {
        animation-delay: .6s;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0px)
        }
        40% {
            transform: translateY(-40px);
        }
        80%,
        100% {
            transform: translateY(0px);
        }
    }
`;