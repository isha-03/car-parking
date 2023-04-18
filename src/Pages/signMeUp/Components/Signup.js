import React from 'react'


export default function Signup() {
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
      <p className="bgimg" style={{marginLeft:440,fontSize:35,fontFamily:'Hubballi'}}>Signup</p>
      {/* <img src="D:\Car-parking project\car-parking\src\Components\parking.jpg" alt="" class="bg-image"/> */}
      <form>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputEmail1" className="form-label">Email-ID</label>
    <input type="email" className="form-control" style={myStyle} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" style={{color:'grey'}}>We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleUserName" className="form-label">User-Name</label>
    <input type="text" className="form-control" style={myStyle} id="exampleUserName"/>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" style={myStyle} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3" style={myStyle2}>
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" style={myStyle} id="exampleInputPassword2"/>
  </div>

  <div className="mb-3 form-check" style={myStyle2}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-success" style={myStyle2}>Signup</button>
</form>
    </div>
    
    </>);
}
