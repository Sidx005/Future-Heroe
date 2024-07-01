import React,{useState}from 'react';
import { motion } from 'framer-motion';
import Hero from './Superhero.png';
import './Landinngpg.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Landingpg = () => {
    const[username,setUsername]=useState('')

    const Services = [
        {
            id: 1,
            title: 'Interactive Visuals',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGOlMebRNnl77rmXNUbxfEhvalzaNmorjJQ&s'
        },
        {
            id: 2,
            title: 'AI Summaries',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVw_TG4k3weLGHuPvfEcKY3Q9rjjrY-Ndiw&s'
        },
        {
            id: 3,
            title: 'Rights Quizzes',
            src: 'https://static.vecteezy.com/system/resources/thumbnails/022/353/826/small/3d-file-icon-illustration-png.png'
        }
    ];

    const videos = [
        {
            id: 1,
            src: "https://www.youtube.com/embed/f5OacBZUAww?si=v_uv3tNhtnQcVpvi"
        },
        {
            id: 2,
            src: "https://www.youtube.com/embed/CfhV9D6SVyg?si=Qm48gYjYViJKfMzH"
        },
        {
            id: 3,
            src: "https://www.youtube.com/embed/hZFmGRMF0sI?si=gOmh7mY1hoEaJ7xr"
        },
    ];

    return (
        <div className='body'>
            <Navbar username={username}/>
            <div className="sect1">
                <span>
                    <h1>Children First: Ensuring Rights, <br />
                        Changing Lives
                    </h1>
                    <br />
                    <button>Explore</button>
                </span>

                <div className="Sup">
                    <img src={Hero} alt="" />
                </div>
            </div>
            <motion.div className="sect2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ margin: '50px' }}
            >
                <h1>About Us</h1>
                <div className="About">
                    <img src="https://img.freepik.com/premium-vector/child-protection-abstract-illustration_335657-5352.jpg" alt="" />
                    <span>
                        <h2>We engage children and parents in discovering <br /> and embracing children's rights through interactive and playful experiences.</h2>
                    </span>
                </div>
            </motion.div>
            <motion.div className="sect3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ margin: '50px' }}
            >
                <h1>News</h1>
                <div className="Videos">
                    {
                        videos.map(list => (
                            <iframe width="400" key={list.id}
                                height="300"
                                src={list.src}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        ))
                    }
                </div>
            </motion.div>
            <motion.div className="sect4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ margin: '50px' }}
            >
                <h1>Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center ">
                    {
                        Services.map(items => (
                            <div className='box h-full w-full flex flex-col items-center' key={items.id}>
                                <img src={items.src} alt="" />
                                <p>{items.title}</p>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
            <motion.div className="sect5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                // viewport={{ margin: '50px' }}
            >
                <h1>Analytics</h1>
            </motion.div>
            <Footer />
        </div>
    );
}

export default Landingpg;
