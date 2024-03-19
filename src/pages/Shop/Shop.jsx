import Cart from "../../components/cart/Cart";
import Filter from "../../components/shopPage/filter";
import ItemCard from "../../components/shopPage/itemCard"
import NavBar from "../../components/shopPage/navBar"
import Search from "../../components/shopPage/search";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./shop.css";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


// const navigate = useNavigate()

//  useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {

//       if (user) {
//         // User is signed in, redirect to dashboard
//         navigate('/shop');
//       } else {
//         // No user is signed in, redirect to signup page
//         navigate('/loginsignup');
//       }
//     });
//  }, [navigate]);

const Shop = ()=>{
    return (
        <div className="shop_page">
            <NavBar/>
            <div className="shop_container">
                <div className="filter_container">
                    <Filter/>
                </div>
                <div className="shop_content">
                    <Search/>
                    <ItemCard/>
                    {/* <div className="cart-container"><Cart/></div> */}
                </div>
            </div>
            
        </div>
        
    )
}

export default Shop;