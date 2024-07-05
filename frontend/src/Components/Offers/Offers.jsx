import React from 'react'
import "./Offers.css"

import exclusive_image from "../Assets/lady image for exclusive offfer.png"


const Offers = () => {
  return (
    <div className='offers'>
     <div className='offers-left'>
       <h1>डिजिटल दौर का साथी, खेती में सच्ची क्रांति </h1>
       <h1></h1>
       <p>आओ, हमारे बेस्ट ऑफर्स देखें, खेती में सफलता के बीज बोएं</p>
       <button>अभी देखें</button>


     </div>

     <div className='offers-right'>
         <img src={exclusive_image} alt= "" />
        
      </div>
      
    </div>
  )
}

export default Offers
