import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCircleClaws } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    return (
        <nav>
            <div>
                <span className="logo">
                    <GiCircleClaws className='navIcon' />
                    <h2><Link to="/" className='Links'>LEADERSHIP
                        <br />EVENT</Link></h2>
                </span>
                <ul>
                    <li><Link to="/" className='Link'>Home</Link></li>
                    <li><Link to="/about" className='Link'>About</Link></li>
                    <li><Link to="/tickets" className='Link'>Tickets</Link></li>
                    <li><Link to="/contact" className='Link'>Contact</Link></li>
                    <RxHamburgerMenu className='burger' />
                    <IoClose className='close' />
                    <li><Link to="/tickets" className='Link'><button className='tickets'>Buy Tickets</button></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar