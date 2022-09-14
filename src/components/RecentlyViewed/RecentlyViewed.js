import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Newsletter = () => {
	return (
		<Container>
			<h1>Vistos recentemente</h1>
			<div className="latest-recentlyVieweds">
				<Link to="/catalog">
					<div className="recentlyViewed">
						<div className="recentlyViewed-image">
							<img src="https://imgur.com/USL0D1J.png"/>
						</div>
						<span className="recentlyViewed-name">Camiseta Shanks - One Piece</span>
						<div className="recentlyViewed-prices">
							<span className="recentlyViewed-cut-price">$8,99</span>
							<span className="recentlyViewed-price">$7,99</span>
							<span className="recentlyViewed-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="recentlyViewed">
						<div className="recentlyViewed-image">
							<img src="https://imgur.com/USL0D1J.png"/>
						</div>
						<span className="recentlyViewed-name">Camiseta Shanks - One Piece</span>
						<div className="recentlyViewed-prices">
							<span className="recentlyViewed-cut-price">$8,99</span>
							<span className="recentlyViewed-price">$7,99</span>
							<span className="recentlyViewed-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="recentlyViewed">
						<div className="recentlyViewed-image">
							<img src="https://imgur.com/USL0D1J.png"/>
						</div>
						<span className="recentlyViewed-name">Camiseta Shanks - One Piece</span>
						<div className="recentlyViewed-prices">
							<span className="recentlyViewed-cut-price">$8,99</span>
							<span className="recentlyViewed-price">$7,99</span>
							<span className="recentlyViewed-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="recentlyViewed">
						<div className="recentlyViewed-image">
							<img src="https://imgur.com/USL0D1J.png"/>
						</div>
						<span className="recentlyViewed-name">Camiseta Shanks - One Piece</span>
						<div className="recentlyViewed-prices">
							<span className="recentlyViewed-cut-price">$8,99</span>
							<span className="recentlyViewed-price">$7,99</span>
							<span className="recentlyViewed-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
				<Link to="/catalog">
					<div className="recentlyViewed">
						<div className="recentlyViewed-image">
							<img src="https://imgur.com/USL0D1J.png"/>
						</div>
						<span className="recentlyViewed-name">Camiseta Shanks - One Piece</span>
						<div className="recentlyViewed-prices">
							<span className="recentlyViewed-cut-price">$8,99</span>
							<span className="recentlyViewed-price">$7,99</span>
							<span className="recentlyViewed-save-price">Save $1,00</span>
						</div>
					</div>
				</Link>
			</div>
			<hr className="medium-hr"/>
		</Container>
	);
};
export default Newsletter;