import { useState } from 'react';
import AUthContext from '../context/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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