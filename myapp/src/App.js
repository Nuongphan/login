
import {Routes, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import ForgotPassword from "./forgotpassword";
import ResetPassword from "./resetpassword";

function App() {
  
  return (
    <div className="App">
    <Routes> 
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    
    </div>
  );
}

export default App;
