import React from 'react';
import { StyledModal } from './styles';
import PropTypes from 'prop-types';
import { Close } from 'assets/icons';

const BaseModal = ({ isOpen, handleClose, children, withBorder, isTopScreen }) => {

	const customStyle = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			zIndex: 999,
			backgroundColor: 'rgba(12, 12, 12, 0.5)',
			backdropFilter: 'blur(1px)',
		}
	};

	return (
		<StyledModal
			appElement={document.getElementById('root')}
			isOpen={isOpen}
			withBorder={withBorder}
			isTopScreen={isTopScreen}
			style={customStyle}
			onRequestClose={() => handleClose()}
		>
			<div className="header">
				<span>Kimochism 気持ち</span>
				<span onClick={() => handleClose() } className="close">
					<img src={Close} />
				</span>
			</div>
			<div className="content">
				{children}
			</div>
		</StyledModal>
	);
};

BaseModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	withBorder: PropTypes.bool,
	isTopScreen: PropTypes.bool,
};

export default BaseModal;
