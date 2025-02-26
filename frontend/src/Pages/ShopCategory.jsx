import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/Item/Item';
import { Link } from 'react-router-dom';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("Category:", props.category); // Log the category prop

  return (
    <div className='shop-category'>
      
       <div className='shopcategory-indexSort'>
        <p>
             <span>Showing 1-12</span> out of 36 products
        </p>

         <div className='shopcategory-sort'>
             Sort By <img src={dropdown_icon} alt="" /> 
         </div>

       </div>

       <div className='shopcategory-products'>
        {
           Array.isArray(all_product) && all_product?.map((item, i) =>
          {
            console.log(`Checking item ${i}: ${item.category === props.category}`); // Log whether the condition is met
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })
        }
       </div>
       <Link to="/">
          <div className='showcategory-loadmore'>
              Explore More 
          </div>
       </Link>
    </div>
  )
}

export default ShopCategory;
