import React from 'react';
import './Games.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
const Games = () => {
  return (
    <div className='flex flex-col   items-center w-screen h-screen justify-center'>
      < Navbar/>
      <div className='grid grid-cols-1  mt-[10.5rem] lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 justify-center items-center'>
      <Link to='/StoryBuilder'>  <div className='boxes h-[200px] rounded-md shadow-lg flex justify-center font-bold bg-[url(https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4617.jpg)] bg-no-repeat bg-center bg-cover items-center text-center p-5  w-[200px]'>StoryBuilder</div></Link>
       <Link to={'/Quiz'}> <div className='boxes h-[200px] rounded-md shadow-lg  font-bold bg-[url(https://static.vecteezy.com/system/resources/previews/027/765/346/non_2x/quiz-sign-mark-free-free-png.png)] bg-no-repeat bg-center bg-cover items-center text-center w-[200px]'><h1 className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-white'>Quiz</h1></div></Link>
       <Link to={'/Memory'}> <div className='boxes h-[200px] rounded-md shadow-lg  font-bold bg-[url(https://th.bing.com/th/id/OIP.BVb8ew5kn5C4icfanW6m0AHaE8?rs=1&pid=ImgDetMain)] bg-no-repeat bg-cover bg-center text-center   w-[200px]'><h1 className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white'>Puzzle</h1></div></Link>
        </div>
    </div>
  );
}

export default Games;
