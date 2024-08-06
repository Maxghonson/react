import React from 'react'

const Contact = () => {
  return (
    <div className='contact container'>
      <form action="">
        <h1>Please Say Hi</h1>
        <div className="inputs">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Subject' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact