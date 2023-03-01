import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages.js/Home";
import About from "./Pages.js/About";
import Contact from "./Pages.js/Contact";
import Donate from "./Pages.js/Donate";
import Footer from "./extra/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
