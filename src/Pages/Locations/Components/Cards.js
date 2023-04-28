import React from 'react';
import { Link } from "react-router-dom";

export default function Cards() {
  let count=12;
  return (<>
    <div className="d-flex flex-row mb-3 my-5 mx-5">
      <div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title" style={{fontSize: 30}}>Main Gate</h5>
    <p className="card-text" style={{color:'grey'}}>free spaces</p>
    <p className="card-text" style={{fontSize: 50}}>{count}</p>
    <a href="./spots.html" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Main Auditorium</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mechanical Workshop</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Teslas</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">G Block</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>

</div>

<div className="d-flex flex-row mb-3 my-5 mx-5">
<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Q Hostel</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Girl's Hostel</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">COS</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">TAN</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>

<div className="card mx-3 text-bg-dark p-3" style={{width: 250}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Polytechnical Dept</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-outline-success">Check</a>
  </div>
</div>
</div>
    </>
  );
}
