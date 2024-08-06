import React from 'react'
import { PiCoffeeLight } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineRadio } from "react-icons/hi2";
import { CiMoneyBill } from "react-icons/ci";
const Ticket = () => {
  return (
    <div className='ticket container'>
      <h1 className='ticketTitle'>Get Your <span>Tickets</span></h1>
      <div className="cards">

        <div className="card">
          <div className="price">
            <h2>Early Bird</h2>
            <h2>$640</h2>
          </div>
          <p><PiCoffeeLight /> All-Day Coffee + Snacks</p>
          <p><IoLogoGameControllerB /> After Party</p>
          <p><FaRegMessage /> 24/7 Support</p>
          <hr />
          <p>Quick group meetings for multiple teams</p>
          <button>Buy Tickets</button>
        </div>
        <div className="card">
          <div className="price">
            <h2>Gold</h2>
            <h2>$840</h2>
          </div>
          <p><PiCoffeeLight /> All-Day Coffee + Snacks</p>
          <p><HiOutlineRadio /> Group Meetings + After Party</p>
          <p><FaRegMessage /> 24/7 Support + Instant Chats</p>
          <hr />
          <p>Quick group meetings for multiple teams</p>
          <button>Buy Tickets</button>
        </div>
        <div className="card">
          <div className="price">
            <h2>Platinum</h2>
            <h2>$1,240</h2>
          </div>
          <p><CiMoneyBill /> Cashback $200s</p>
          <p><IoLogoGameControllerB /> After Party</p>
          <p><FaRegMessage /> Private Meetings + After Party</p>
          <hr />
          <p>group talks and private chats for multiple teams</p>
          <button>Buy Tickets</button>
        </div>

      </div>


    </div>
  )
}

export default Ticket