import "./itemCard.css";

import image from "./tempImages/loginSystem.jpg";
import icon from "./tempImages/loginIcon.svg";

const ItemCard =()=>{


    return (
        <div className="item_card">
            <div className="image">
                <img src={image} alt="" />
                {/* image to imported from database */}
            </div>
            <div className="item_name">
                <img src={icon} alt="" />
                <span>Login/Signup System</span>
                {/* icon and name to be imported from the database */}
            </div>
            <div className="details">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi corporis nemo autem deserunt saepe provident necessitatibus quasi, eligendi explicabo.</span>
                {/* content to be imported from the database */}
            </div>
            <div className="interactions">
                <button className="view_btn">View details</button>
                <button className="add_btn">Add to app</button>
            </div>
        </div>
    )
}

export default ItemCard;