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
    
    <div className='relative flex flex-col justify-center items-center min-h-screen w-full gap-6' >
        <form className='z-50 backdrop-blur-lg text-white bg-[rgba(0,0,0,0.3)] flex shadow-lg p-5 shadow-grey-700 rounded-md flex-col justify-center items-center gap-5' action="post" onSubmit={handleSubmit}>
            <label htmlFor="email"><b>Email</b></label>
         <input className='p-2 text-black shadow-md shadow-blue-500 rounded-md' type="email" name='email' onChange={e=>setEmail(e.target.value)} />
         <label htmlFor="password"><b>Password</b></label>

         <input className='p-2 text-black shadow-blue-400 shadow-md' type="password" name='password' onChange={e=>setPassword(e.target.value)} />
         <button className='bg-blue-600 text-white hover:bg-blue-500 hover:shadow-sm hover:shadow-blue-700' type="submit">Login</button>
         <Link className='text-blue-600 underline' to='/register'>Don't have an account?</Link>
        </form>
    </div>
  )
}

export default Login