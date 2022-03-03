import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';

const NotificationError = ({ errorMessage }) => {
	return (
		<Container>
			{/* <img src="https://www.teahub.io/photos/full/294-2940803_freetoedit-error-black-white-sticker-emilysedit-error-png.jpg" /> */}
			<span>{errorMessage}</span>
		</Container>
	);
};

NotificationError.propTypes = {
	errorMessage: PropTypes.string,
};

export default NotificationError;