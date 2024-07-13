import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const ViewStory = () => {
    const { id } = useParams();
    const [fullblog, setBlog] = useState(null);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/stories/${id}`);
                setBlog(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStory();
    }, [id]);

    if (!fullblog) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full min-h-screen flex  flex-col' key={id}>
            <Navbar />
            <div className="flex flex-col items-left p-5 w-[auto] sm:my-[50%] md:my-[15%]  my-[50%] lg:my-[15%] text-left gap-5">

            <h1 className='font-bold italic'>{fullblog.title}</h1>
            <p>{fullblog.content}</p>
            <p className='flex gap-3'><b>Characters:</b><h1 className='capitalize'>{fullblog.characters}</h1></p>
            <p className='flex gap-3'><b>Author:</b><h1 className='capitalize'>{fullblog.author}</h1> </p>
            <p><b>Published:</b> {fullblog.createdAt}</p>
            </div>
          
        </div>
    );
};

export default ViewStory;
