import React,{useState} from 'react'
import { auth } from './firebase'
import {Link,useHistory} from "react-router-dom"

function Signup() {
    const[email,setEmail]=useState("")
    const history=useHistory();
    const[password,setpassword]=useState("")
    const signin=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
              if(auth){
                  history.push("/students")
              }
        })
    }
    return (
        <div className="login_page">
            <img className="login_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs-zvPwkK25Q3h5mpcHnhsPehIytL2ojPt9w&usqp=CAU"/>

        <div className="login">
            

            <h5>Create a new Account</h5>
            <div className="login_detail">
                <form >
                  <p>Email ID / Phone Number</p>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                  <p>Password</p>
                  <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                
                </form>
                   <button className="button1" type="submit" onClick={signin}>Submit</button>
                   <div className="link">
                     
                    
                    </div>
                
            </div>
        </div>
        </div>
    )
}

export default Signup
