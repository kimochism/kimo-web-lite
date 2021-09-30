/* eslint-disable quotes */
import React from 'react';
import Footer from 'shared/Footer';
import Menu from '../../shared/Menu';
import { Container } from './styles';
import Notification from 'shared/Notification';
import { toast } from 'react-toastify';

const Product = () => {
	return (
		<Container>
			<Menu />
			<div className="product-container">
				<div className="product-left">
					<img src="https://i.pinimg.com/564x/84/a8/44/84a84467aa5bde128d943ea5eb1665f8.jpg" alt="Foto do produto"/>
				</div>

				<div className="product-right">
					<div className="product-buy">
						<h4>Camiseta Oni Demon</h4>
						<span><b>KIMOCHISM 気持ち</b></span>
						<div className="product-price">
							<span>R$ 199,00</span>
							<span>Até 8x de 24.84</span>
						</div>
						<div className="product-size">
							<div>
								<span>Tamanhos</span>
							</div>
							<div>
								<div className="product-size-box ">
									P
								</div>
								<div className="product-size-box ">
									M
								</div>
								<div className="product-size-box ">
									G
								</div>
							</div>
						</div>
						<div className="product-color">
							<div>
								<span>Cores</span>
							</div>
							<div>
								<div className="product-color-box bg-black"></div>
								<div className="product-color-box bg-white"></div>
							</div>
						</div>
						<div className="product-social-media">
							<span>
								<a href="https://www.instagram.com/kimochism.store/" target="blank">
									Veja quem comprou esse,
									e outros produtos no nosso Instagram ;)
								</a> 
							</span>
						</div>
						<div onClick={() => toast(Notification, {
							hideProgressBar: true,
							position: toast.POSITION.BOTTOM_RIGHT,
						})} className="product-button">
							<button>Comprar</button>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</Container>
	);
};

export default Product;
