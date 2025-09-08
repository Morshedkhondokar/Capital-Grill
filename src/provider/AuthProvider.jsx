import { useEffect, useState } from 'react';
import AUthContext from '../context/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../firebase.config'
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const googleProvider = new GoogleAuthProvider();

    // create user
    const createNewUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    
    // Login  user 
    const loginUser = (email,password) =>{
      return  signInWithEmailAndPassword(auth,email,password)
    }

    // login with google
    const loginWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
    }

    // current user
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    //   setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

    const authInfo = {
        user,
        setUser,
        createNewUser,
        loginUser,
        loginWithGoogle 
    }
    return (
        <AUthContext.Provider value={authInfo}>
            {children}
        </AUthContext.Provider>
    );
};

export default AuthProvider;