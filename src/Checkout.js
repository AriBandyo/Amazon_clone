import React from 'react';
import './Checkout.css';
import Subtotal from './Newsubtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


function Checkout() {

  const [{cart}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
            className='checkout__ad'
            src ="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="" />
            <div>
              <h2 className='checkout__title'>Your shopping Basket</h2>

              {cart.map(item =>(
                <CheckoutProduct
                  id ={item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                
                />
              ))}

            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>

        </div>
      
    </div>
  )
}


export default Checkout
