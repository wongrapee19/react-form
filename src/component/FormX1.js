import './styleform.css'
import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';

const FormX1 = () => {
    // เก็บ state input
    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirm,setConfirm] = useState('')

    //เก็บ State error
    const[errorusername,setErrorUsername] = useState('')
    const[erroremail,setErrorEmail] = useState('')
    const[errorpassword,setErrorPassword] = useState('')
    const[errorconfirm,setErrorConfirm] = useState('')

    //state color
    const[usernameColor,setUsernameColor] = useState('')
    const[emailColor,setEmailColor] = useState('')

    //submit
    const validateForm = (e) => {
        e.preventDefault()
       
      if(username.length > 8) {
        setErrorUsername('')
        setUsernameColor('#29F07D')
      }else{
        setErrorUsername('Please enter a name with more than 8 characters.')
        setUsernameColor('red')
      }

      if(email.includes("@")) {
        setErrorEmail('')
        setEmailColor('#29F07D')
      }else{
        setErrorEmail('Invalid email format')
        setEmailColor('red')
      }

      if(password.length > 5) {
        setErrorPassword('')
      }else{
        setErrorPassword('Please enter a password of more than 5 characters.')
      }

      if(confirm === password) {
        setErrorConfirm('')

      }else{
        setErrorConfirm('Please enter the same password.')
      }


    }


    return (
        
    <div class="container"> 

        <div className='icon'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react logo" style={{ width: '70px', }}/>
             </div>

 
               
        <form  class="form" onSubmit={validateForm}>
            <h3> <span class="r1">  React </span>  Form Register </h3>
          
        <div class="form-ct">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} style={{backgroundColor:usernameColor}} />
            <small>{errorusername}</small>
        </div>
        <div class="form-ct">
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  style={{backgroundColor:emailColor}}/>
            <small>{erroremail}</small>
        </div>
        <div class="form-ct">
            <label>Password</label>
            <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <small>{errorpassword}</small>
        </div>
        <div class="form-ct">
            <label>Confirm Password</label>
            <input type="password"value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
            <small>{errorconfirm}</small>
        </div>

<center>
<button type="submit" >Register</button>
</center>
     



        </form>
  </div>
 )
}


export default FormX1