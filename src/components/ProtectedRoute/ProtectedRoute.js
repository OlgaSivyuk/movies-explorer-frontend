import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  debugger;
  return (
    <>
      {
        props.loggedIn ? props.children : <Navigate to='/' replace />
      }
    </>
  );
};

export default ProtectedRoute;