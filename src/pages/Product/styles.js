import styled from 'styled-components';

export const Container = styled.div`
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
	.product-buy{
		background-color: white;
		flex-direction: column;
		display: flex;
		h4{
			font-size: 34px;
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
		width: 52px;
		height: 52px;
		margin-right: 2%;
		font-weight: 600;
		background-color: white;
		border: 1px solid black;
		justify-content: center;
		align-items: center;
		display: flex;
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
	.product-color-box{
		width: 52px;
		height: 52px;
		margin-right: 2%;
		background-color: white;
		border: 1px solid black;
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.product-social-media{
		padding: 50px 0px;
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
		padding-top: 50px;
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
			text-transform: uppercase
		}
	}
	/* variables */
	.bg-black{
		background-color: black;
	}
	.bg-white{
		background-color: white;
	}
`;
