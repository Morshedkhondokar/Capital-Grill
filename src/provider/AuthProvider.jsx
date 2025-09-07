import { useState } from 'react';
import AUthContext from '../context/AuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.config'
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // create user
    const createNewUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    

    const authInfo = {
        user,
        setUser,
        createNewUser
    }
    return (
        <AUthContext.Provider value={authInfo}>
            {children}
        </AUthContext.Provider>
    );
};

export default AuthProvider;