import "./itemCard.css";
import CardData from "./CardData"
import image from "./tempImages/loginSystem.jpg";
import icon from "./tempImages/loginIcon.svg";
import { Link } from "react-router-dom";

const ItemCard = (props) => {


    return (
        <ul className="item_list">
            {props.items.map((item) => {
                return <li key={item.id}>
                    <div className="item_card">
                        <div className="image">
                            <img src={item.data().imageUrl? item.data().imageUrl : image} alt="fdssfcews" />
                            {/* image to imported from database */}
                        </div>
                        <div className="item_name">
                            <img src={item.data().iconUrl? item.data().iconUrl : icon} alt="" />
                            <span>{item.data().name}</span>
                            {/* icon and name to be imported from the database */}
                        </div>
                        <div className="details">
                            <span>
                                {item.data().description.slice(0,120)}{item.data().description.length>30? "...":" "}
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