import styled from 'styled-components';
import { sizes } from 'variables';

export const Container = styled.div`
    
    display: flex;
    justify-content: center;

    .content {
        width: 100%;
        padding: 0px;

        label {
            font-weight: 600;
            padding-bottom: 8px;
            font-size: 14px;
            padding-top: 10px;
        }

        input {
            padding: 15px;
            border: 2px solid black;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
        }

        .product-button {
            padding-top: 50px;

            button {
                width: 100%;
                padding: 15px;
                margin-right: -15px;
                border: 5px solid black;
                background-color: white;
                box-shadow: -15px 15px black;
                font-weight: bold;
                font-size: 16px;
                cursor: pointer;
                text-transform: uppercase
		    }
	    }
        
        p {
            text-align: center;
            padding: 40px 0px 20px 0px;
            font-size: 14px;
        }

        .sign-up {
            font-weight: bold;
            cursor: pointer;
        }

        .errorMessage {
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: red;
            padding: 40px 0px 0 0px;
        }

        @media screen and (min-width: ${sizes.xl}) {
            input {
                padding: 12px;
            }

            label {
                font-size: 12px;
                padding-top: 8px;
            }

            .product-button {
                padding-top: 25px;
            }

            .errorMessage {
                padding: 40px 0px 0px 0px;
                font-size: 12px;
            }

            p {
                text-align: center;
                padding: ${props => props.error ? '10px 0px 0px 0px' : '30px 0px 10px 0px'};
                font-size: 12px;
            }
        }

        @media screen and (max-width: ${sizes.md}) {

            input {
                padding: 12px;
            }

            .product-button {
                padding-top: 25px;
            }
            
            p {
                text-align: center;
                /* padding: ${props => props.error ? '10px 0px 0px 0px' : '30px 0px 10px 0px'}; */
                padding: ${props => props.error && !props.isSignIn ? '0px' : ''};
                font-size: 14px;
            }
        }
    }
`;