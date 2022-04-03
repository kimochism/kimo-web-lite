import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';

const Warning = ({message}) => {
	return (
		<Container>
			<span> { message } </span>
		</Container>
	);
};

Warning.propTypes = {
	message: PropTypes.string.isRequired
};

export default Warning;