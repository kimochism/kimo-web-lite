import React from 'react';

import { Container, StyledSpinner, GlobalStyle } from './styles';

const Fallback = () => {
	return (
		<Container>
			<GlobalStyle />
			<StyledSpinner viewBox="0 0 50 50">
				<circle
					className="path"
					cx="25"
					cy="25"
					r="20"
					fill="none"
					strokeWidth="4"
				/>
			</StyledSpinner>
		</Container>
	);
};

export default Fallback;