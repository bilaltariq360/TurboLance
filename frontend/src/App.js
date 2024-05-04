import "./App.css";

import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Error from "./component/404";
import Gigs from "./component/Gigs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Dashboard from "./component/Dashboard";
import Documentation from "./component/Documentation";
import Otp from "./component/otp"
import ForgotPassword from "./component/forgotPassword";
import User from "./component/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gigs" element={<Gigs />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/User" element={<User />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
