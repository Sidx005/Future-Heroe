import React, { createContext, useState } from 'react'
export const UserContext=createContext();
const Usercontext = ({children}) => {
    const[username,setUsername]=useState('');
  return (
   <UserContext.Provider value={{username,setUsername}}>
    {children}
    </UserContext.Provider>
  )
}

export default Usercontext