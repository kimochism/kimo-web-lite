import styled from 'styled-components';

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
            color: red;
            padding: 40px 0px 0 0px;
        }
    }
`;