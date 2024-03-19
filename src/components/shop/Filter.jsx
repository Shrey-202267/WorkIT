import React from "react";
import Fdata from "./Fdata";
import { MdKeyboardArrowDown } from "react-icons/md";

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
