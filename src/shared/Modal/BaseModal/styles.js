import styled from 'styled-components';
import Modal from 'react-modal';
import { colors, sizes } from 'variables';

export const StyledModal = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28%;
    max-height: 95%;
    background: ${colors.white};
    outline: none;
    letter-spacing: 1px;
    right: 5%;
    top: 12%;
    position: absolute;

    border: ${ props => props.withBorder ? '2px solid' + colors.black : '' };

    top: ${ props => props.isTopScreen ? '3%' : '12%' };

    .header {
        width: 85%;
        display: flex;
        justify-content: space-between;
        padding: 15px 0 15px 0;
        
        span {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 18px;
        }

        .close {
            cursor: pointer;
            img {
                width: 25px;
            }
        }
    }

    .content {
        width: 85%;
        height: 10%;
        padding: 10px;
    }

    @media screen and (max-width: ${sizes.md}) {
        width: 90%;

        .content {
            width: 90%;
        }
    }
`;