import React from 'react';
import { Container } from './styles';
import { FuelegonImage, BannerImage } from 'assets/images';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<Container>
			<div className="banner-letter">
				<img src={ BannerImage } alt="Roupas e acessórios, Otaku & Geek" />
				<Link to='/catalog'>
					<button className="btn-primary">
						checar agora
					</button>
				</Link>
			</div>
			<div className="banner-image">
				<div className="border-image">
				</div>
				<img src={ FuelegonImage } alt="Personagem de Anime"/>
			</div>

		</Container>
	);
};

export default Banner;
