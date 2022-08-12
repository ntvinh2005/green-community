import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const CurrentUser = ({ children }) => {
  const { user } = useAuth();

  return <div>{user ? <Navigate to="/" />  : children}</div>;
};

export default CurrentUser;
