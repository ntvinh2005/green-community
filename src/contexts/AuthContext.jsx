import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error.message));
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      if (user !== null) setUser(user);
      setLoading(false);
    });

    return unsubcribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
