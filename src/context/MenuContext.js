import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MenuContext = React.createContext();

const MenuProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState();

    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

MenuProvider.propTypes = {
    children: PropTypes.node
};

export { MenuContext, MenuProvider };


