import { useEffect, useState } from 'react';
import AUthContext from '../context/AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase.config'
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
      return  signInWithPopup(auth,googleProvider)
    }

     //   update User Profile
  const updateUserProfile = (update) => {
    return updateProfile(auth.currentUser, update);
  };

    // current user
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);


  // log out user
  const logoutUser = () => {
    
    return signOut(auth);
  };

    const authInfo = {
        user,
        setUser,
        createNewUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        loading ,
        updateUserProfile
    }
    return (
        <AUthContext.Provider value={authInfo}>
            {children}
        </AUthContext.Provider>
    );
};

export default AuthProvider;