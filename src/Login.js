import React, { useState } from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const signIn=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth)
            {
                history.push("/");
            }
        }).catch(error =>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth)
            {
                history.push("/");
            }
        }).catch(error =>alert(error.message))
    }
    return (
        <div className="login">

            <Link to="/">
                <img className="login_logo" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" alt="Amazon"/>
            </Link>
            
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                   <small>Password</small>
                    <input className="inputpass" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Amazon's Conditions of Use and Privacy Notice.</a></p>
                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;