import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>अपने ईमेल पर विशेष प्रस्ताव (OFFERS) प्राप्त करें</h1>
    <p> Subscribe to our Newsleeter and Stay Updatedd</p>
    <div>
      <input type='email' placeholder='Your email id '/>
      <button> Subscribe</button>

    </div>
      
    </div>
  )
}

export default NewsLetter
