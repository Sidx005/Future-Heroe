import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import './index.css'
const StoryBuilder=()=>{
    const storyExp = [
      {
        id: 1,
        title: 'Right to Education:',
        description: "Children can write stories emphasizing the importance of education and advocating for every child's right to quality education. They can explore themes like access to schools, overcoming learning barriers, and how education shapes children's lives and futures. Stories may feature characters facing challenges in accessing education but persevering to achieve their dreams with community support."
      }, {
        id: 2,
        title: 'Protection from Abuse and Exploitation:',
        description: 'Children can write stories about child abuse and exploitation, showing characters facing different challenges. The stories emphasize speaking up, seeking help, and supporting each other. By recognizing and reporting abuse, children promote safe environments and advocate for their right to be protected from harm.'
      }, {
        id: 3,
        title: 'Right to Play and Leisure:',
        description: 'Children can write stories highlighting the importance of play and leisure activities. The stories showcase characters enjoying recreational activities and demonstrate the benefits of play for children’s physical, mental, and emotional well-being. By promoting the right to play, children advocate for their need for fun and relaxation.'
      }
    ];
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stories');
        setStories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, []);
  return(
    <main className='flex flex-col items-center h-screen gap-6 p-5'>
     <Navbar/>
      <h1 className='my-[10%] text-4xl font-bold'>Story Section</h1>
      
      <div className="story-container">
        <h1 className='font-bold text-2xl'>Topics:</h1>
        { storyExp.map((story,index)=>(
      <div key={index} className='story-cards m-5 w-full'>
        
          
          <h1 className='font-bold text-xl'>{story.title}</h1>
          <p>{story.description}</p>
     <Link to={'/story'}> <button className='primary-btn text-white hover:scale-105 shadow-xl p-2 bg-green-500 rounded-lg'>Write Your stories</button></Link>  
        
      </div>
        ))
          
        }
      </div>
      <div className="posts w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {stories.map((story,index)=>(
          <Link key={story._id} to={`/story/${story._id}`}>
              <div key={index} className='story-cards shadow-xl shadow-black rounded-md  justify-center p-4  m-5  md: grid-cols-1'>
             <h1 className='font-bold text-xl'>{story.title}</h1>
             <p>Characters: {story.characters}</p>
             <p>Content: {story.content.slice(0,10)}{'...'}</p>
             <p className='font-bold'>Author: {story.author}</p>
           </div>
          </Link>
         
        ))
        }
      </div>
 
    </main>
  )
}
export default StoryBuilder