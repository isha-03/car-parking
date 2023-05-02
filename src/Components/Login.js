import './Loginview.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import React, {useState} from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Create the submit method.
  const submit = async e => {
    e.preventDefault();
    const user = {
          email: email,
          password: password
         };
    // Create the POST requuest
    const { data } = await axios.post(
      'http://localhost:8000/token/',
      user,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    
   // Initialize the access & refresh token in localstorage.      
   localStorage.clear();
   localStorage.setItem('access_token', data.access);
   localStorage.setItem('refresh_token', data.refresh);
   axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
   window.location.href = '/locations'
}

  let myStyle={
      width:350,
    }
  let myStyle2={
      marginLeft:65,
      fontFamily:'Inconsolata',  
    }
  const[clr,setClr] = useState('green');

  const handleOnChange = (event)=>{
    setClr('white')
    }

  return (
    <>
    <div className='container mt-5 text-bg-dark p-3' style={{width:500,height: 550, backgroundColor:'grey',borderRadius: 10}}>
      <p className="bgimg mb-5" style={{marginLeft:185,fontSize:35,fontFamily:'Hubballi'}}>Login</p>
      {/* <img src="D:\Car-parking project\car-parking\src\Components\parking.jpg" alt="" class="bg-image"/> */}
      <form>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputEmail1" className="form-label">Email-ID</label>
    <input type="email" className="form-control" style={myStyle} id="exampleInputEmail1" aria-describedby="emailHelp" value={email} required onChange={e => setEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text" style={{color:'grey'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputPassword1" className="form-label" value={password} required onChange={e => setPassword(e.target.value)}>Password</label>
    <input type="password" className="form-control" style={myStyle} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check" style={myStyle2}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1" style={{color:'grey'}}>remember me</label>
  </div>
  <button type="submit" className="btn btn-outline-success" onClick={submit} style={{marginLeft:65, fontFamily:'Inconsolata',borderRadius: 50,width: 350}}><Link to="LoginMe" style={{textDecoration:'none',color:'white'}}>Login</Link></button>
  
  
  <div id="emailHelp" className="form-text mt-5" style={{color:'grey', marginLeft:135}}>Don't have an account? <Link to="Sign-Up" style={{textDecoration:'none',color:'blue'}}>SignUp</Link></div>
</form>
    </div>
    <div id="emailHelp" className="form-text mt-5" style={{color:'black', marginLeft:690}}>Forgot password? <Link to="ForgotPass" style={{textDecoration:'none',color:'blue'}}>click here</Link></div>
    </>
  );
}