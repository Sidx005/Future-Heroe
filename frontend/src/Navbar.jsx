// Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {UserContext} from './Usercontext';
import './Navbar.css';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { username } = useContext(UserContext);
  console.log('Hello')
    const sidebar = () => {
        setShow(!show);
    };

    const firstChar = username ? username.charAt(0) : '';
    const lastChar = username ? username.charAt(username.length - 1) : '';

    return (
        <div className='navbar'>
            <div className="title font-bold">
              <Link to={'/'}>FutureHeroes</Link>  
            </div>
            <ul className={show ? 'open' : ''}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/Laws'>Laws</Link></li>
                <li><Link to='/Games'>Games</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                {username && <li id='accList' ><p id='account'>{firstChar + lastChar}</p></li>}
                <li><Link to='/Login'>Login</Link></li>
            </ul>
            <FaBars className='bars' onClick={sidebar} />
        </div>
    )
}

export default Navbar;
