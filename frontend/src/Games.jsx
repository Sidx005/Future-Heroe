import React from 'react';
import './index.css'
import {Link} from 'react-router-dom'
const Games = () => {
  return (
    <div className='flex flex-col   items-center w-screen h-screen justify-center'>
      <h1 className='text-xl font-bold'>Welcome to the games page!</h1>
      <div className='grid grid-cols-2 gap-5 p-5  center'>
        <div className='h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'><Link to='/StoryBuilder'>StoryBuilder</Link></div>
        <div className='h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'><Link>Quiz</Link></div>
        <div className='h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-gray-200 items-center text-center p-5  w-[200px]'><Link>Puzzle</Link></div>
        </div>
    </div>
  );
}

export default Games;
