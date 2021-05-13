import React from 'react';
import Footer from 'shared/Footer/index';
import Menu from '../../shared/Menu/index';
import { Container } from './styles';

const Product = () => {
	return (
		<Container>
			<Menu />
			<div className="product-container">

				<div className="product-left">
					<img src="https://i.pinimg.com/564x/bf/d6/ca/bfd6ca102f24558f63fa7bbdc7a34df2.jpg" alt="Foto do produto"/>
					<img src="https://i.pinimg.com/564x/8d/2e/8f/8d2e8f9eb6fca418329b09d61498f231.jpg" alt="Foto do produto"/>
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
						<div className="product-button">
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
