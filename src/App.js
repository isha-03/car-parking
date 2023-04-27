
import './App.css';

import Locations from "./Pages/Locations";
import Home from "./Pages/Home";
import Signup from "./Pages/signMeUp";
import Forgotpass from "./Pages/Forgotpass";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/Locate" element={<Locations />} /> */}
        <Route path="/LoginMe" element={<Locations />} />
        <Route path="/Sign-Up" element={<Signup />} />
        <Route path="/ForgotPass/Sign-Up" element={<Signup />} />
        <Route path="/ForgotPass" element={<Forgotpass />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
    </>
  );
}

export default App;
