import { createContext, useEffect, useState } from "react";
import { auth } from "../database/firebaseConfig";
import {onAuthStateChanged} from "firebase/auth"

export const UserContext = createContext(null);

export const UserProvider  = (props) => {

    const [user,setUser]= useState(null);

    useEffect(()=>{
        getUser();
    },[]);

    const getUser =()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("context got the user",currentUser)
        });
      
    }

    return (
        <UserContext.Provider value={{user,setUser}}>{props.children}</UserContext.Provider>
    )
}