import React from 'react'
import './Laws.css'
import Lady from './Law.png'
import Navbar from './Navbar'
const Laws = () => {
    const Countries = [
        {
            id: 1,
            country: 'India'
        },
        {
            id: 2,
            country: 'US'
        },
        {
            id: 3,
            country: 'UK'
        },
        {
            id: 4,
            country: 'Russia'
        }

    ]
    return (
        <div>
            <Navbar />
            <header>

                <h1 className='heading'>We did the research for you,so that you don't have to!!!</h1>
                <div className="img">
                    <img src={Lady} alt="" />
                </div>
       
            </header>
            <div className="Laws">
                    {
                        Countries.map(
                            list => (
                                <div className="Country" key={list.id}>
                                    <h1>{list.country }</h1>
                                </div>
                            )
                        )
                    }
                </div>
        </div>
    )
}

export default Laws