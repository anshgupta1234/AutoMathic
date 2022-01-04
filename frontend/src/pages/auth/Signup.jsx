import React, { Component } from 'react';

export default class Signup extends Component {
    render() { 
        return <div id='container'> 
            <h1 id='title'>Signup</h1>
            {/* remember to fill in action link page */} 
            {/* Form Signup */}
            <form action="" method="get">
                <label htmlFor="username" className='usernameStyle'>Username:<input type="text" name="username" id="username"  placeholder='Enter your username' onChange={this.checkUsernameInput} /></label>
                <label htmlFor="password" className='passwordStyle'>Password: <input type="password" name="password" id="password" placeholder='Enter your password' onChange={this.checkPasswordInput} /></label>
                <p className='warning' id='specialCharWarning'>❗Do not enter any special characters</p>
                <p className="warning" id="numberOfCharacters">❗Username & password must be more than 5 characters long</p>
                <button type='submit' id='signupBtn' onClick={this.signupButtonClicked}>Sign up</button>
            </form>
            
            <h3 id='authomathicName'>Automathic</h3>
        </div>;
    }
    checkUsernameInput=()=>{
        // Regex
        let usernameInput=document.getElementById("username");
        const usernameRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(usernameRegex.test(usernameInput.value)|| usernameInput.value.length<5){
            usernameInput.className="red"
        }else if(usernameInput.value===""){
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
    signupButtonClicked=(e)=>{
        e.preventDefault()
        const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let usernameInput=document.getElementById("username");
        let passwordInput=document.getElementById("password");
        if(regex.test(usernameInput.value)|| usernameInput.value.length<5){
            usernameInput.className="red"
        }else if(regex.test(passwordInput.value)||passwordInput.value.length<5){
            passwordInput.className="red"
        }else{
            usernameInput.className="green"
            window.location.replace("./Dashboard.jsx"); //Not sure if this works
        }
    }
}
