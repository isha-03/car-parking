import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Cards() {
  let count2=-1;
  let [count,setCount] = useState(-1);
  const [sec, setSec] = useState(1);


  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/parkCount/${sec}`)
       .then(res => {
         const resp = res.data;
         console.log(resp);
         setCount( resp.ans);

        const interval = setInterval(() => {
          if (sec < 30) {
            setSec(sec + 1);
          }
          else{
            setSec(1);
          }
          }, 1000);
       })
 },[sec])
 

  return (<>
    <div className="d-flex flex-row mb-3 my-5 mx-5">
      <div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Main Gate</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Main Audi</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Workshop</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>TSLAS</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>G block</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>

</div>

<div className="d-flex flex-row mb-3 my-5 mx-5">
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Q Hostel</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Girl's Hostel</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>COS</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>TAN</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Boy's Hostel</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count2}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
</div>
    </>
  );
}
