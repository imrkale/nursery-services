import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link,useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase'

function Header() {

    const [{ basket,user }]=useStateValue();
    const history=useHistory();
    const handleAuthentication=()=>{
        if(user)
        {
            auth.signOut();
        }
        else{
            history.push("/login")
        }
    }
    return (
        <div className="header">
           
            {/* amazon icon */}
            <img onClick={e=>history.push("/")} className="header_logo" src="https://www.pikpng.com/pngl/b/373-3733937_garden-nursery-plants-nursery-logo-clipart.png" alt="Company"/>
           
            
            {/* Search bar */}
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            {/* Header nav */}
            <div className="header_nav">
           
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">{user?'Hello '+user.email:'Hello Guest'}</span>
                    <span className="header_optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                </div>
                <Link to="/orders">
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
               
                </Link>
                 
                
                <Link to="/checkout">
                
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>
                

            </div>
            
        </div>
    )
}

export default Header;
