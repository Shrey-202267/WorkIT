import React from 'react'
import Filter from './Filter';
import "./shop.css"
import Search from './Search';
import Card from './Card';
import NavBar from '../navbar/NavBar';


const Shop = () => {
  return (<>
    <NavBar/>
    <div className='container-shop'>
        <div  className="filter">
            <Filter/>
        </div>
        <div  className="main-content">
            <Search/>
            <Card/>
        </div>
    </div>
  </>
  )
}

export default Shop;