import React from 'react';
import './Loginview.css';
export default function Login() {
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
      <p className="bgimg" style={{marginLeft:440,fontSize:35,fontFamily:'Hubballi'}}>Login</p>
      <img src="E:\react\smart-car-parking\car-parking\public\parking.jpg" alt="" class="bg-image" width={200} height={200}/>
      <form>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputEmail1" className="form-label">User-ID</label>
    <input type="email" className="form-control" style={myStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{color:'grey'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" style={myStyle} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check" style={myStyle2}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-success" style={myStyle2}>Login</button>
</form>
    </div>
    
    </>
  );
}
