import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Gallery = () => {
	return (
		<Container>

			<h2>Original Kimochism</h2>
			{/* Container da galeria */}
			<div className="gallery-container">
				{/* Items da galeria */}
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
						<label>Kamisato Ayaka</label>
						<span>
							<i>$99,90</i>- $49,90
							<b>Save $50,00</b>
						</span>
					</div>
				</div>
				<div className="gallery-box">
					<div>
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