import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id, title,image,price, rating }) {


    const [{cart}, dispatch] = useStateValue();

    console.log("This is the basket>>>",cart);

    const addToBasket = () => {
        //DISPATCH THE ITEM INTO THE DATA LAYER

        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title : title ,  
                image: image,
                price: price,
                rating: rating,
            },
        });

        



    };




    
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
            </div>

        </div>
        <img src = {image}/>  
        <button onClick ={addToBasket} >Add to Basket</button>  
    </div>
  )
}

export default Product
