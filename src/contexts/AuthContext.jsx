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





























// import React from 'react';
// import { useContext, useState, useEffect, useReducer } from 'react';
// import { auth, database } from '../firebase';
// import AuthReducer from '../reducers/AuthReducer';

// import {
//   query,
//   collection,
//   where,
//   getDocs
// } from "firebase/firestore";

// import { db } from "../firebase";

// const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
// };

// const AuthContext = React.createContext(INITIAL_STATE);

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   // const [loading, setLoading] = useState(true);
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   useEffect(()=>{
//     localStorage.setItem("user", JSON.stringify(state.user))
//     console.log(state.user);
//   },[state.user])

//   // useEffect(() => {
//   //   const unsubcribe = auth.onAuthStateChanged(async (User) => {
//   //     console.log(User);
//   //     if (User != null) {
//   //       try {
//   //         // const userCredentialQuery = query(collection(db, 'profile'), where("uid", "==", User.uid));
//   //         // const userCredential = await getDocs(userCredentialQuery);
//   //         const userCredential = database.profile.where("uid", "==", User.uid).onSnapshot((snapshot) => snapshot.docs.map(database.formatDoc));

//   //         setUser(userCredential);
//   //         // console.log(user);
//   //         console.log(userCredential);
//   //       } catch (err) {
//   //         console.log(err);
//   //       }
//   //       // console.log(User.uid);
//   //     } else {
//   //       setUser({});
//   //     }
//   //     setLoading(false);
//   //   });
  
//   //   return unsubcribe;
//   // }, []);

//   const value = {
//     user: state.user,
//     signup,
//     login,
//     logout,
//     dispatch
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {/* {!loading && children} */}
//       {children}
//     </AuthContext.Provider>
//   );
// }
