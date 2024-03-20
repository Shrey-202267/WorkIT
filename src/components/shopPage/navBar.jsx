import "./navBar.css";
// images and icons

import logo from "../../assets/images/logo.png";
import expert_icon from "../../assets/images/expert.png";
import cart_icon from "../../assets/icons/cart.svg";
import profile_icon from "../../assets/icons/profile.svg";
import logout_icon from "../../assets/icons/logout.svg";

import { Link } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { auth } from "../../database/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const NavBar =()=>{

    const userInstance = useContext(UserContext);
    // const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            window.location.href="/"
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }


    return (
        <div className="nav_bar">
            <Link to={"./"} className="logo">
            <img  src={logo} alt="" /></Link>
            <div className="controls">
                <div className="talk_to_experts">
                    <img src={expert_icon} alt="" />
                    <span>Talk to experts</span>
                </div>
                <Link to={"/shoppingCart"}>
                    <div className="cart">
                        <img src={cart_icon} alt="" />
                        <span className="items_count">0</span>
                        {/* this 5 should be replaced with the number of items in the cart */}
                    </div>
                </Link>
                <div className="user">
                    <img src={profile_icon} alt="" />
                    <div className="user_options">
                        <span><img src={profile_icon} alt="" />{userInstance.user?.displayName}</span>
                        <span onClick={handleLogout}><img src={logout_icon} alt=""  />Logout</span>
                        {/* the content will change according to the logged in user */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;