import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BaseModal from 'shared/Modal/BaseModal/BaseModal';
import { Container } from './styles';
import useFallback from 'hooks/useFallback';
import api from 'api/index';
import { AuthContext } from 'context/AuthContext';

const AddressSelector = ({ isOpen, handleClose, onSelected }) => {

  const [addresses, setAddresses] = useState([]);
  const [selected, setSelected] = useState();

  const [fallback, showFallback, hideFallback] = useFallback();
  const { email } = useContext(AuthContext);

  useEffect(() => {
    getAddresses();
  }, []);

  const getAddresses = async () => {

    showFallback();

    await api.users.showByEmail(email).then(async user => {
      await api.customers.showByUser(user._id).then(async customer => {
        await api.addresses.listByCustomer(customer._id).then(addresses => setAddresses(addresses));
      });
    });

    hideFallback();
  };

  const selectAddress = (event, address) => {

    setSelected(address);
    const addresses = document.querySelector('.addresses');

    addresses.childNodes.forEach(child => {
      child.style.background = 'white';
      child.style.color = 'black';
    });
    
    console.log(event.target);

    event.target.style.background = 'black';
    event.target.style.color = 'white';
  };

  return (
    <BaseModal
      isOpen={isOpen}
      handleClose={handleClose}
      requestClose
      withBorder
      isCenterScreen
      showClose
    >
      <Container>
        <div className="addresses">
          {addresses && addresses.map(address => {
            return (
              <span key={address._id} onClick={(e) => selectAddress(e, address)}>{address.street}, {address.number}</span>
            );
          })
          }
        </div>
        {/* <span className="add-address">
          Adicionar endereço
        </span> */}
        <button disabled={!selected} onClick={() => {onSelected(selected); handleClose();}}>
          Selecionar
        </button>
      </Container>
      {fallback}
    </BaseModal>
  );
};

AddressSelector.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  onSelected: PropTypes.func,
};

export default AddressSelector;