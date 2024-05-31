import {React,useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const[show,setShow]=useState(false)
    const sidebar=()=>{
    setShow(!show)
    }
  return (
    <div className='navbar'>
        <div className="title">
           <h2>FutureHeroes</h2> 
        </div>
        <ul className={show?'open':""}>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/'>AboutUs</Link></li>
         <li><Link to='/Laws'>Laws</Link></li>
         <li><Link to='/'>Games</Link></li>
         <li><Link to='/'>Contact Us</Link></li>
         
        </ul>
      <FaBars className='bars' onClick={sidebar}/>
      
    </div>
  )
}

export default Navbar