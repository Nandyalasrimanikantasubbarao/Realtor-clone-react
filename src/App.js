import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import FrogotPassword from "./pages/FrogotPassword";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Forgot-Password" element={<FrogotPassword />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
