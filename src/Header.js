import React from 'react'
import './Header.css';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import SearchIcon from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
//import { useStateValue } from './StateProvider';


function Header() {

    const [{cart},dispatch] = useStateValue();
       

  return (
    <div className='header'>
        <Link to ="/">
            <img className="header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

        </Link>
        
        <div className='header__search'>
            <input className='header__searchInput' type='text'/>
            <SearchIcon className="header_searchIcon" />
 
        </div>

        <div className='header__nav'>
            <div className='header__options'>
                <span className='header_optionsLineOne'>Returns</span>
                <span className='header_optionsLineTwo'>& Order</span>
            </div>
            <div className='header__options'>
                <span className='header_optionsLineOne'>Your</span>
                <span className='header_optionsLineTwo'>Prime</span>
            </div>
            <Link to ='/login'>

                <div className='header__options'>
    
                    <span className='header_optionsLineOne'>Hello Guest</span>
                    <span className='header_optionsLineTwo'>Sign In</span>
                </div>
            
            </Link>
            
            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasket/>
                    <span className='header_optionLineTwo header_basketCount'>{cart?.length}</span>
                </div>
            </Link>
        </div>
 
      
    </div>
  )
}

export default Header
