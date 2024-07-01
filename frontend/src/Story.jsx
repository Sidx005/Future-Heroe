import axios from 'axios'
import React, { useContext, useState } from 'react'
import './index.css'
import Navbar from './Navbar';
import {UserContext} from './Usercontext'
const Story = () => {
    const { username } =useContext(UserContext);

    const[title,setTitle]=useState('')
    const[characters,setCharacters]=useState('')
    const[content,setContent]=useState('')
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
        await axios.post('http://localhost:5000/stories',{
            title,
            characters: characters,
            content,
            author:username
        });
        setTitle('')
        setCharacters('')
        setContent('')
        alert('Story posted successfully!');

      }catch(error){
        console.error(error);
        alert('Failed to post story')
      }
    }
  return (
    <div className='p-5 story-form flex flex-col items-center justify-center gap-5'>
        <Navbar/>
        <h1 className=' my-7 text-2xl font-bold'>Write your story</h1>
    <form className='flex flex-col p-5 gap-5 font-bold items-start justify-start text-left' action="post" onSubmit={handleSubmit} >

        <div>
            <label htmlFor="Title">Title</label>
            <input className='mx-5 border-solid border-2' type="text" name='Title' value={title} id="" onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="characters">Characters</label>
            <input className='mx-5 border-solid border-2' name='characters' type="text" value={characters} id="" onChange={(e)=>setCharacters(e.target.value)} />
        </div>
        <div>
                    <label>Content</label>
                    <textarea className='mx-5 border-solid border-2' value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <button className=' bg-green-300 my-4 hover:bg-green-500 p-4 rounded-md shadow-xl transition-smooth text-center hover:shadow-green-300  hover:text-white' type='submit'>Post Story</button>
    </form>
        
    </div>
  )
}

export default Story