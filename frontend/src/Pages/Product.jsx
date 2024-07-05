import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import  ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx"
import Breadcrumb from "../Components/Breadcrums/Breadcrums.jsx"
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx"

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  // Find the product by productId
  const product = all_product.find(item => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>
      <Breadcrumb productName={product.name} />
      <ProductDisplay product={product} />

      <p className='plants'><span>Recomended Crops(सुझाई हुई फसल ) :</span>{product.plants}</p> 
    
       <p className='use'><span>How To Use (उपयोग) :</span>{product.use}</p> 

   
      <DescriptionBox product={product} />
    </div>
    </div>
  );
};

export default Product;


/*import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { all_product } = useContext(ShopContext);

  // Find the product by productId
  const product = all_product.find(item => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.new_price}</p>
      {/* Add more product details here *
      </div>
    );
  };
  
  export default Product;
*/  