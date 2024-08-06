import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
const Home = () => {
    return (
        <div className='home container'>
            <div className="leader">
                <h1><span>LEADERSHIP</span> CONFERENCE 2022</h1>
                <div className="btn">
                    <button>July 12 to 18, 2022</button>
                    <button>Times Square, NY</button>
                </div>
                <FaArrowDownLong className='downIcon' />
            </div>
            <div className="highlights">
                <div>
                    <h1>2019 Highlights</h1>
                </div>
                <div>
                    <h1>2020 Highlights</h1>
                </div>
                <div>
                    <h1>2021 Highlights</h1>
                </div>
            </div>
        </div>
    )
}

export default Home