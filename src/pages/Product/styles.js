import styled from 'styled-components';
import { colors } from 'variables';

export const Container = styled.div`
	background-color: white;
	.product-container{
		padding: 80px 0px;
		justify-content: center;
		display: flex;
	}
	.product-left{
		width: 650px;
		margin-right: 5%;
		flex-direction: column;
		display: flex;
		img{
			width: 100%;
		}
	}
	.product-right{
		width: 400px;
	}
	.product-quantity{
		margin-top: 3%;
		margin-bottom: 3%;
		div{
			align-items: center;
			flex-direction: row;
			display: flex;
			label{
				width: 34px;
				height: 34px;
				font-size: 20px;
				justify-content: center;
				align-items: center;
				display: flex;
			}
			span{
				font-weight: bold;
				padding: 10px 0px;
			}
			button{
				width: 32px;
				height: 32px;
				font-size: 20px;
				border: 1px solid black;
				background-color: white;
				cursor: pointer;
			}
		}
	}
	.product-buy{
		background-color: white;
		flex-direction: column;
		display: flex;
		h4{
			font-size: 30px;
			font-weight: 400;
			padding-bottom: 15px;
			margin: 0px;
		}
		span{
			font-size: 14px;
			letter-spacing: 2px;
		}
	}
	.product-price{
		padding: 35px 0px;
		justify-content: center;
		flex-direction: column;
		display: flex;
		span:nth-child(1){
			font-size: 30px;
			padding-bottom: 15px;
		}
	}
	.product-size{
		flex-direction: column;
		display: flex;
		div{
			flex-direction: row;
			display: flex;
			span{
				font-weight: bold;
				padding: 10px 0px;
			}
		}
	}
	.product-size-box{
		width: 32px;
		height: 32px;
		margin-right: 2%;
		margin-bottom: 3%;
		font-weight: 600;
		background-color: white;
		border: 1px solid black;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		display: flex;
		cursor: pointer;
	}

	.selected {
		background-color: ${colors.black};
		color: ${colors.white};
	}
	
	.product-color{
		div{
			flex-direction: row;
			display: flex;
			span{
				font-weight: bold;
				padding: 10px 0px;
			}
		}
	}
	.product-color-content{
		border: 1px solid gray;
		padding: 3px;
		margin-right: 2%;

	}
	.product-color-box{
		width: 28px;
		height: 28px;
		background-color: white;
		justify-content: center;
		align-items: center;
		display: flex;
		cursor: pointer;
	}
	.product-cep{
		display: flex;
		flex-direction: column;
		span{
			font-weight: bold;
			padding: 10px 0px;
		}
		input{
			width: 50%;
			padding: 10px ;
			border: 1px solid black;
		}
		a{
			color: #808080;
			padding: 5px 0px;
			text-decoration: none;
			font-size: 12px;
		}
	}
	.product-social-media{
		padding: 30px 0px;
		padding-bottom: 0px;
		line-height: 20px;
		font-size:15px;
		span{
			font-weight: 600;
			a{
				text-decoration: none;
				font-weight: bold;
				color: black;
			}
		}
	}
	.product-button{
		margin-top: 50px;
		button{
			width: 100%;
			padding: 20px;
			margin-right: -15px;
			border: 5px solid black;
			background-color: white;
			box-shadow: -15px 15px black;
			font-weight: bold;
			font-size: 16px;
			cursor: pointer;
			text-transform: uppercase;
		}
	}
	/* variables */
	.bg-black{
		background-color: black;
	}
	.bg-white{
		background-color: white;
	}
	.bg-red{
		background-color: red;
	}
	.selected-color {
		border: 1px solid black;
	}
`;
