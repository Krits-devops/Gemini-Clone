import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Kris.</span></p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful Places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt='' />
          </div>

          <div className="card">
            <p>Breifly Summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt='' />
          </div>

          <div className="card">
            <p>Brain storm team bonding activities for our work retreat</p>
            <img src={assets.menu_icon} alt='' />
          </div>

          <div className="card">
            <p>Improve readability of the following code</p>
            <img src={assets.code_icon} alt='' />
          </div>

        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter your prompt here' />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about peopel, so double-check its responses.
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default Main