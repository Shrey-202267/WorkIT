import React, { useContext, useState } from 'react'
import { motion } from "framer-motion"
import './LoginSignUp.css'

import { 
    signInWithEmailAndPassword, createUserWithEmailAndPassword,signInWithPopup,updateProfile
  } from 'firebase/auth';
  import {auth,provider} from '../../database/firebaseConfig';

import company_logo from '../../assets/images/workit logo 1.svg';
import google_logo from '../../assets/images/google.png';

import {AuthContext} from "../../context/AuthContext"

const LoginSignUp = () =>{
    // const history = useHistory(); // Use useHistory hook
    const [action, setAction] = useState("Sign Up");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPasssword,setConfirmPassword] = useState("");
    const [submitButtonDisable,setsubmitButtonDisable] = useState(false);

    const {dispatch} = useContext(AuthContext)


    
    const signIn = ()=>{
        if(password==="" || email===""){
            alert( "Please fill out all the fields.");
        }else{
            setsubmitButtonDisable(true)
            signInWithEmailAndPassword(auth,email, password)
            .then((response) =>{
                const user = response.user;
                dispatch({type:"LOGIN", payload:user});
                setsubmitButtonDisable(false) 
                window.location.href = '/shop';
                alert("Successfully  Logged In");
                //TODO Rounting
                // history.push('src/pages/Shop/Shop.jsx'); // Use history to navigate
                
                setEmail("")
                setConfirmPassword("")
                setName("")
                setPassword("")
            })
            .catch((err) =>{
                setsubmitButtonDisable(false) 
                alert(err.message);
                setEmail("")
                setConfirmPassword("")
                setName("")
                setPassword("")
            })
        }
    }
    const signUp = ()=>{
        // e.preventDefault();
        if(name === "" || password==="" || email===""){
            alert( "Please fill out all the fields.");
        }
        else if(password !== confirmPasssword){
            alert("Both Password fields must be the same.")
        }
        else{
            setsubmitButtonDisable(true)
            createUserWithEmailAndPassword(auth,email,password)
            .then(async(response) =>{
                const user = response.user;
                await updateProfile(user,{
                    displayName: name,
                });
                setsubmitButtonDisable(false)
                
                alert("Account created");
                //TODO Rounting
                // history.push('/shop'); // Use history to navigate
                window.location.href = '/shop';
                setEmail("")
                setConfirmPassword("")
                setName("")
                setPassword("")
            })
            .catch((err) =>{
                setsubmitButtonDisable(false) 
              alert(err.message)
              setEmail("")
              setConfirmPassword("")
              setName("")
              setPassword("")
            })
        }
    }
    
    const handleClick = ()=>{
        signInWithPopup(auth,provider).then((data) =>{
            setEmail(data.user.email);
            setName(data.user.displayName);
            dispatch({type:"LOGIN", payload:data.user});
            localStorage.setItem("email",data.user.email);
            alert("Google  Account Connected Successfully!");
            window.location.href = '/shop';
        })
        .catch((err) =>{
            alert(err.message);
        })
    }
    return (
    <> 
    <div className='sign-in-container'>
        <motion.div className='logo'
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{
                ease: "linear",
                duration: 0.35,
                x: { duration: 0.5 }
            }}>
            <img src={company_logo} alt="Logo"/>
        </motion.div>
        <motion.div className="conatiner"
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}}
                transition={{
                    type:"spring",
                    stiffness:100,
                    delay:0.5,
        }}>
            <div className="inputs">
                <div className="toggle-switch" >
                    <div className="toggle" >
                        <div className={action === "Sign Up" ? "Login-signUp gray" : "Login-signUp" } onClick={() => {
                            setAction("Login")
                            setEmail("")
                            setConfirmPassword("")
                            setName("")
                            setPassword("")
                            }}>Login
                        </div>
                        <div className={action === "Login" ? "Login-signUp gray" : "Login-signUp" } onClick={() => {
                            setAction("Sign Up")
                            setEmail("")
                            setConfirmPassword("")
                            setName("")
                            setPassword("")
                            }}>Sign Up
                            </div>
                    </div>
                </div>
                <div className="form">

                    {action === "Login" ? <div></div> : <><p>Name</p>
                    <div className="input">
                        <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div></>}

                    <p>Email</p>
                    <div className="input">
                        <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <p>Password</p>
                    <div className="input">
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {action === "Login" ? <div></div> : <> <p>Confirm Password</p>
                    <div className="input">
                        <input type="password" placeholder="Confirm Password" value={confirmPasssword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div></>}

                </div>

            <div className="submit-container">
                <button className="submit"
                    onClick={action === "Login" ? signIn : signUp }
                    disabled={submitButtonDisable}>
                        {action}
                </button>
                <button className= "googlebtn" onClick={handleClick}> 
                    <img src={google_logo} alt="google"/>
                    <p>Continue with <br /> <span>Google</span> </p>
                </button>

            </div>
            </div>
        </motion.div>    
    </div>
    </>
    )
}
export default LoginSignUp