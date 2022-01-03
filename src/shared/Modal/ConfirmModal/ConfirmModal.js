import React from 'react';
import { Container } from './styles';
import BaseModal from '../BaseModal/BaseModal';
import PropTypes from 'prop-types';

const ConfirmModal = ({ isOpen, message, handleClose, handleConfirm }) => {

	return (
		<BaseModal
			isOpen={isOpen}
			handleClose={handleClose}
			withBorder
			isCenterScreen
		>
			<Container>
				<span className="message">{message}</span>
				<div className="actions">
					<button className="cancel" onClick={() => handleClose()}>Cancelar</button>
					<button className="confirm" onClick={() => handleConfirm()}>Confirmar</button>
				</div>
			</Container>
		</BaseModal>
	);
};

ConfirmModal.propTypes = {
	isOpen: PropTypes.bool,
	message: PropTypes.string,
	handleClose: PropTypes.func,
	handleConfirm: PropTypes.func,
};

export default ConfirmModal;
