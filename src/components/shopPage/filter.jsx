import Fdata from "./Fdata";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./filter.css";

const Filter = () => {

    return (
        <div className="filter-container">

            <div className="filter-heading">
                <h2 >
                    Filter by category
                </h2>
                <MdKeyboardArrowDown />
            </div>

            <ul>
                {Fdata.map((item) => {
                    return <li key={item.id}>
                        <div className="filter-items">
                            <p > 
                                {item.filter}
                            </p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <hr />
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Filter;
