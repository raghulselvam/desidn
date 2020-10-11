import React,{useState} from 'react';
import "./Login.css";
import {BrowserRouter as Router,Switch,Route,Link} from"react-router-dom";
import { auth } from './firebase';
import {useHistory} from "react-router-dom";



function Login() {
    const[email,setEmail]=useState("")
    const history=useHistory();
    const[password,setpassword]=useState("")
    const login=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
                
                  history.push("/students")
            
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login_page">
            <img className="login_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs-zvPwkK25Q3h5mpcHnhsPehIytL2ojPt9w&usqp=CAU"/>

        <div className="login">
            

            <h5>Login to your account</h5>
            <div className="login_detail">
                <form >
                  <p>Email ID / Phone Number</p>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                  <p>Password</p>
                  <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                
                </form>
                   <button className="button1" type="submit" onClick={login}>Submit</button>
                   <div className="link">
                     <a href="#">Forgot Password/</a>
                     <Link to="/logins">
                        <a href="#">Claim Your Account</a>
                    </Link>
                    </div>
                
            </div>
        </div>
        </div>
    )
}

export default Login;
