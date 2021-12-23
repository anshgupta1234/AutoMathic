import React, { Component } from 'react';
import "login.css"
export default class Login extends Component {
    render() { 
        return <div id='container'> 
            <h1 id='title'>Login</h1>
            {/* remember to fill in action link page */}
            {/* Form login */}
            <form action="" method="get">
                <label htmlFor="username" className='usernameStyle'>Username:<input type="text" name="username" id="username"  placeholder='Enter your username' onChange={this.checkUsernameInput} /></label>
                <label htmlFor="password" className='passwordStyle'>Password: <input type="password" name="password" id="password" placeholder='Enter your password' onChange={this.checkPasswordInput} /></label>
                <p className='warning' id='specialCharWarning'>❗Do not enter any special characters</p>
                <p className="warning" id="numberOfCharacters">❗Username & password must be more than 5 characters long</p>
                <button type="submit" id='loginBtn'>Login</button>
            </form> 
            {/* put the style in the css file, just for temporary visualization */}
            <h1 className='seperationLine'>Seperation line</h1>
            <h2>Don't have an account?</h2>
            {/* The signup button will bring them to the signup page */}
            <button id='signupBtn' onClick={this.signupButtonClicked}>Sign up</button>
            <h3 id='authomathicName'>Automathic</h3>
        </div>;
    }
    checkUsernameInput=()=>{
        // Regex
        let usernameInput=document.getElementById("username");
        const usernameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(usernameRegex.test(usernameInput.value)|| usernameInput.value.length<5){
            usernameInput.className="red"
        }else if(usernameInput.value===" "){
            usernameInput.className=""
        }else{
            usernameInput.className="green"
        }
    }
    checkPasswordInput=()=>{
        // Regex 
        let passwordInput=document.getElementById("password")
        const passwordRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(passwordRegex.test(passwordInput.value)|| passwordInput.value.length<5){
            passwordInput.className="red"
        }else if(passwordInput.value===""){
            passwordInput.className=""
        }else{
            passwordInput.className="green"
        }
    }
    signupButtonClicked=()=>{
        window.location.replace("Signup.jsx")
    }
}
