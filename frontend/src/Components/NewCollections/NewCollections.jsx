import React, { useEffect, useState } from 'react'
import "./NewCollections.css"

import Item from '../Item/Item'


const NewCollections = () => {
  const [new_collection,setNew_collection]= useState([]);
  useEffect(()=>{
              fetch (`${window.location.origin}/newcollection`)
              .then((response)=> response.json())
              .then((data)=> setNew_collection(data))

  },[])  // here we add square bracket because of this useeffect executed only onced
  return (
    <div className='new-collections'>
          
              <h1>
                  NEW COLLECTIONS (नए कृषि उत्पाद)
             </h1>
             <hr/>
        
      
    

        <div className='collections'>
          {
            new_collection.map((item,i) =>{
                return <Item key ={i}  id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>

            })
          }

        </div>
    </div>

    )
  
}

export default NewCollections
