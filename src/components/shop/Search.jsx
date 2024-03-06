import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";


const Search = () => {
  return (
    <div className='search-bar'>
        <h3>Select features for your app</h3>
        <div  class="input-group">
            <div className='search-input-icon'>
                <input type="search" name="search" id="search" placeholder='Search...' />
                <CiSearch/>
            </div>
            <div className='sort-btn ' id='hide-icon'><IoFilterSharp/></div>
            <div className='sort-btn'><LuArrowDownUp/></div>
        </div>
    </div>
  )
}

export default Search