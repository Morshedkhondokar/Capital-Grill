import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';

const PrivateRouter = ({children}) => {
     const {user,loading} = useContext(AuthContext)
      if(loading){
    return <Loading/>
  }

     if(user){
        return children
     }
    
    return <Navigate to="/login"/>;
};

export default PrivateRouter;