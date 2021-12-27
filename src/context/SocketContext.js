import React from 'react';
import socketio from 'socket.io-client';
import PropTypes from 'prop-types';

const socket = socketio.connect('http://localhost:3333');
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


