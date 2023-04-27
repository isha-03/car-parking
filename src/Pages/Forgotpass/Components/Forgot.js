
import { Link } from "react-router-dom";
import React, {useState} from 'react';

export default function Forgot() {
    let myStyle={
        width:500,
    }
    let myStyle2={
        marginLeft:240,
        fontFamily:'Inconsolata',  
    }
    
  
  return (
    <>
    <div className='container mt-5 text-bg-dark p-3' style={{width:1000}}>
      <p className="bgimg" style={{marginLeft:360,fontSize:35,fontFamily:'Hubballi'}}>Reset Password</p>
      {/* <img src="D:\Car-parking project\car-parking\src\Components\parking.jpg" alt="" class="bg-image"/> */}
      <form>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputEmail1" className="form-label">Email-ID</label>
    <input type="email" className="form-control" style={myStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{color:'grey'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleUserName" className="form-label">OTP</label>
    <input type="number" className="form-control" style={myStyle} id="exampleotp"/>
  </div>
  <button type="submit" className="btn btn-outline-success" style={myStyle2}>Get OTP</button>
  <button type="submit" className="btn btn-outline-success mx-3" style={myStyle2} ><Link to="Sign-Up">Submit</Link></button>
</form>
    </div>

   
    
    
    </>);
}
