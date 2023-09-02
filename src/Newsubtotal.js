import React from 'react';
import './Newsubtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Newsubtotal() {
    const [{cart}, dispatch] = useStateValue();

  return (
    <div className='Newsubtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Newsubtotal ({cart.length} item): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button> Proceed to checkout</button>

      
    </div>
  )
}

export default Newsubtotal
