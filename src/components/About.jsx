import React from 'react'
import userOne from "./images/avatar/One.jpg"
import userTwo from "./images/avatar/Two.jpg"
import userThree from "./images/avatar/Three.jpg"
import userFour from "./images/avatar/Four.jpg"
const About = () => {
    return (
        <div className='about container'>
            <h1 className='titleAbout'>Our <span>Story.</span></h1>
            <div className="info">
                <div className='story'>
                    <h1>The importance of Leadership Conference in 2022</h1>
                    <p>Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your website. Thank you for choosing TemplateMo website where you can instantly download free CSS templates at no cost.</p>
                    <button className='btn'>Meet Speakers</button>
                    <button className='btnChek'>Chek out Sdechule</button>
                </div>
                <div className='users'>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore</h1>
                    <hr />
                    <div>
                        <img src={userOne} alt="" className='user' />
                        <img src={userTwo} alt="" className='user' />
                        <img src={userThree} alt="" className='user' />
                        <img src={userFour} alt="" className='user' />
                        <p>120+ People are attending with us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About