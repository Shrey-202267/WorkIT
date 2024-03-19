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
import { useContext, useState } from "react";
import {AuthContext} from "../../context/AuthContext"
import { UserContext } from "../../context/userContext";
const NavBar =()=>{
    const {dispatch} = useContext(AuthContext)

    const userInstance = useContext(UserContext);
    // const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            dispatch({type:"LOGOUT", payload:null});
            window.location.href = "/";
            console.log("Signed out successfully")
        }).catch((error) => {
            alert(error.message);
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
                        {console.log(userInstance)}
                        <span><img src={profile_icon} alt="" />{userInstance?.user?.displayName}</span>
                        <span><img src={logout_icon} alt="" onClick={handleLogout} />Logout</span>
                        {/* the content will change according to the logged in user */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;