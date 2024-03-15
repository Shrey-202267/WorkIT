import "./itemCard.css";
import CardData from "./CardData"
import image from "./tempImages/loginSystem.jpg";
import icon from "./tempImages/loginIcon.svg";
import { Link } from "react-router-dom";

const ItemCard = () => {


    return (
        <ul className="item_list">
            {CardData.map((item) => {
                return <li key={item.id}>
                    <div className="item_card">
                        <div className="image">
                            <img src={item.src} alt="fdssfcews" />
                            {/* image to imported from database */}
                        </div>
                        <div className="item_name">
                            <img src={icon} alt="" />
                            <span>{item.title}</span>
                            {/* icon and name to be imported from the database */}
                        </div>
                        <div className="details">
                            <span>
                                {item.description}
                            </span>
                            {/* content to be imported from the database */}
                        </div>
                        <div className="interactions">
                            <button className="view_btn"><Link to={`/product/${item.id}`}>View details</Link> </button>
                            <button className="add_btn">Add to app</button>
                        </div>
                    </div>
                </li>
            })}
        </ul>

    )
}

export default ItemCard;