import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from './Usercontext';

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const { setUsername } = useContext(UserContext);
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
      try{  axios.post('http://localhost:5000/login',{email,password})
        .then(result=>{
            console.log(result);
            if(result.data.message==='Success'){
                setUsername(result.data.username)
                alert('Success')
            navigate('/')
        }
            if (result.data.message === "Incorrect Password") {
                alert("Incorrect password");
            } else if (result.status === 404) {
                alert("No records");
            } 
        
        
        })}
        catch(err){
            console.error(err);
        }
        
    }
  return (
    
    <div >
        <form action="post" onSubmit={handleSubmit}>
            <label htmlFor="email"><b>Email</b></label>
         <input type="email" name='email' onChange={e=>setEmail(e.target.value)} />
         <label htmlFor="password"><b>Password</b></label>

         <input type="password" name='password' onChange={e=>setPassword(e.target.value)} />
         <button type="submit">Login</button>
         <Link to='/register'>Don't have an account?</Link>
        </form>
    </div>
  )
}

export default Login