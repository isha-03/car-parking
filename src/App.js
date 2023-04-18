
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Locations from "./Pages/Locations";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Login/>
      <Routes>
        <Route path="/loginMe" element={<Locations />} />
       
      </Routes>
      {/* <Footer/> */}
    </Router>
      
    </>
  );
}

export default App;
