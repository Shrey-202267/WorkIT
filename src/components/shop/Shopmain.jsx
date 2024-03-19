import React from 'react'
import Filter from './Filter';
import "./shop.css"
import Search from './Search';
import Card from './Card';


const Shopmain = () => {
  return (<>
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

export default Shopmain;