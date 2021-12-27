import React from 'react';
import { Container } from './styles';

const Fallback = () => {
	return (
		<Container>
			<div className="loading">
				<div className="loading-letter">K</div>
				<div className="loading-letter">I</div>
				<div className="loading-letter">M</div>
				<div className="loading-letter">O</div>
				<div className="loading-letter">気</div>
				<div className="loading-letter">持</div>
				<div className="loading-letter">ち</div>
			</div>
		</Container>
	);
};
export default Fallback;