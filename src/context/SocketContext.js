import React from 'react';
import socketio from 'socket.io-client';
import PropTypes from 'prop-types';
import { enviroment } from 'config/axios';
const { REACT_APP_API_URL } = process.env;

const socket = socketio.connect(REACT_APP_API_URL ? REACT_APP_API_URL : enviroment.api_production);
const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node
};

export { SocketContext, SocketProvider };


