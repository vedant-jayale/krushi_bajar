import React,{useEffect,useState} from 'react'
import './Others.css'
import Item  from '../Item/Item'


const Others = () => {

  const [otherProducts,setotherProducts]= useState([]);
  useEffect(()=>{
              fetch (`${window.location.origin}/otherProducts`)
              .then((response)=> response.json())
              .then((data)=> setotherProducts(data))

  },[])  // here we add square bracket because of this useeffect executed only onced

  return (
    <div className='others'>
    <h1>OTHER PRODUCTS (अन्य उत्पाद)  </h1>
    <hr/>
    
    
    <div className='others-item-container'>
      <div className='others-item'>{
        otherProducts.map((item,i)=>{
            return <Item key ={i}  id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>
        })
      }

      </div>
    </div>
      
    </div>
  )
}

export default Others
