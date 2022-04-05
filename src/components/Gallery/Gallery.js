import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Gallery = () => {
	return (
		<Container>
			<h2>Original Kimochism</h2>
			<div className="gallery-container">
				{/* Items da galeria */}
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/Ayaka_web_360x.png?v=1637992406"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/AyakaPEEKER_web_360x.png?v=1637992591"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/Ayaka_web_360x.png?v=1637992406"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/AyakaPEEKER_web_360x.png?v=1637992591"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/Ayaka_web_360x.png?v=1637992406"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/AyakaPEEKER_web_360x.png?v=1637992591"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/Ayaka_web_360x.png?v=1637992406"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<img src="https://cdn.shopify.com/s/files/1/0508/9745/3208/products/AyakaPEEKER_web_360x.png?v=1637992591"></img>
					<div className="gallery-box-title">
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				
			</div>
			<Link to="/catalog">
				<button>Ver mais</button>
			</Link>
			

		</Container>
	);
};

export default Gallery;