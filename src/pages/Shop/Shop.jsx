import Cart from "../../components/cart/Cart";
import Filter from "../../components/shopPage/filter";
import ItemCard from "../../components/shopPage/itemCard"
import NavBar from "../../components/shopPage/navBar"
import Search from "../../components/shopPage/search";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./shop.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { app } from "../../database/firebaseConfig";


// const navigate = useNavigate()

//  useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {

//       if (user) {
//         // User is signed in, redirect to dashboard
//         navigate('/shop');
//       } else {
//         // No user is signed in, redirect to signup page
//         navigate('/loginsignup');
//       }
//     });
//  }, [navigate]);

const db = getFirestore(app);

const Shop = ()=>{

    const [items,setItems] = useState(null);

    useEffect(()=>{
        getItems();
    },[])

    const getItems = async ()=>{
        const docRef = collection(db,"features");

        const docSnap = await getDocs(docRef);
        console.log("got the items", docSnap.docs);
        setItems(docSnap.docs);
        // console.log("items set", items);
       
    }
    console.log("items set", items);

    if(items){
        return (
            <div className="shop_page">
                <NavBar/>
                <div className="shop_container">
                    <div className="filter_container">
                        <Filter/>
                    </div>
                    <div className="shop_content">
                        <Search/>
                        <ItemCard items={items}/>
                        {/* <div className="cart-container"><Cart/></div> */}
                    </div>
                </div>

            </div>

        )
    }else{
        return <h1>Fetching...</h1>
    }
    
}

export default Shop;