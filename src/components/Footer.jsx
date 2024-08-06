import React from 'react'
import { Link } from 'react-router-dom'
import { GiCircleClaws } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer>
            <div className="event">
                <span className="logo">
                    <GiCircleClaws className='navIcon' />
                    <h2><Link to="/" className='Links'> LEADERSHIP EVENT</Link></h2>
                </span>
                <div className="icons">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaWhatsapp className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            <hr />
            <div className="copyright">
                <div>
                    <ul>
                        <li>Our Story</li>
                        <li>Code of Conduct</li>
                        <li>Privacy and Terms</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='template'>
                    <div>
                        <p>Copyright © 2022 Leadership Event Co., Ltd. All Rights Reserved.</p>
                        <p>Design: TemplateMo</p>
                    </div>
                    <FaArrowDownLong className='downIcon upicon' />
                </div>
            </div>
        </footer>
    )
}

export default Footer