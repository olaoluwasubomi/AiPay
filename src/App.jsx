import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import AppRoutes from '../src/routes/AppRoutes';
// import Login from "./Pages/Login/Login";
const App = () =>{
  AOS.init();
  return(
    // <div>
    //   <AppRoutes />
    // </div>
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
  )
}
export default App;