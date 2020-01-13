import React, { createContext } from 'react';
// import axios from 'axios'

export const authContext = createContext()

const AuthContextProvider = (props) => {
  const createUser = (formData) => {
    // axios.post('http://localhost:4000/user/create', formData)
    //   .then(response => response)
    //   .catch(err => err)
    console.log('user created successfully')
  }

  const loginUser = (userCredentials) => {
    // axios.post('http://localhost:4000/user/login', userCredentials)
    //   .then(response => response)
    //   .catch(err => err)
    console.log('user login successfully')
  }
  return (
    <authContext.Provider value={{createUser, loginUser}}>
      {props.children}
    </authContext.Provider>
  );
}
 
export default AuthContextProvider;