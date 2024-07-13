import React from 'react';
import './Games.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
const Games = () => {
  return (
    <div className='flex flex-col   items-center w-screen h-screen justify-center'>
      < Navbar/>
      <h1 className='text-xl font-bold'>Welcome to the games page!</h1>
      <div className='grid grid-cols-2 gap-5 p-5 justify-center items-center'>
      <Link to='/StoryBuilder'>  <div className='boxes h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'>StoryBuilder</div></Link>
       <Link to={'/Quiz'}> <div className='boxes h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'>Quiz</div></Link>
       <Link to={'/Memory'}> <div className='boxes h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'>Puzzle</div></Link>
        </div>
    </div>
  );
}

export default Games;
