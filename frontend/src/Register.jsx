import React, { useState } from 'react'
import './Register.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()
   const handleSubmit=(e)=>{
     e.preventDefault();
     axios.post('http://localhost:5000/register',{name,email,password})
     .then(result=>console.log(result))
     .catch(err=>console.error(err))
     navigate('/login')
   }
  return (
    <div className='flex justify-center items-center w-full'>
        <form action="post" onSubmit={handleSubmit} >
        <h2>Register</h2>
        <label htmlFor="name"><strong>Name</strong></label>
        <input onChange={(e)=>setName(e.target.value)} type="text" autoComplete='off' name='name' value={name} />
        <label htmlFor="email"><strong>E-mail</strong></label>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" autoComplete='off' name='email' value={email} />
        <label htmlFor="password"><strong>Password</strong></label>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" autoComplete='off' name='password' value={password} />
        <button type='submit'>Register</button>
         <Link to="/Login">Already account</Link>
        </form>
    </div>
  )
}

export default Register