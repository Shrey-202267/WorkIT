import "./navBar.css";
// images and icons
import logo from "../../assets/images/logo.png";
import expert_icon from "../../assets/images/expert.png";
import cart_icon from "../../assets/icons/cart.svg";
import profile_icon from "../../assets/icons/profile.svg";
import logout_icon from "../../assets/icons/logout.svg";

const NavBar =()=>{

    return (
        <div className="nav_bar">
            <img className="logo" src={logo} alt="" />
            <div className="controls">
                <div className="talk_to_experts">
                    <img src={expert_icon} alt="" />
                    <span>Talk to experts</span>
                </div>
                <div className="cart">
                    <img src={cart_icon} alt="" />
                    <span className="items_count">0</span>
                    {/* this 5 should be replaced with the number of items in the cart */}
                </div>
                <div className="user">
                    <img src={profile_icon} alt="" />
                    <div className="user_options">
                        <span><img src={profile_icon} alt="" />Lalit Kondekar</span>
                        <span><img src={logout_icon} alt="" />Logout</span>
                        {/* the content will change according to the logged in user */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;