import React,{useEffect,useState} from 'react'
import './Popular.css'
import Item  from '../Item/Item'


const Popular = () => {

  const [popularProducts,setpopularProducts]= useState([]);
  useEffect(()=>{
              fetch (`${window.location.origin}/popularinfertilizers`)
              .then((response)=> response.json())
              .then((data)=> setpopularProducts(data))

  },[])  // here we add square bracket because of this useeffect executed only onced

  return (
    <div className='popular'>
    <h1>POPULAR IN Fertilizers (प्रसिद्ध उर्वरक)  </h1>
    <hr/>
    
    
    <div className='popular-item-container'>
      <div className='popular-item'>{
      popularProducts.map((item,i)=>{
            return <Item key ={i}  id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>
        })
      }

      </div>
    </div>
      
    </div>
  )
}

export default Popular
