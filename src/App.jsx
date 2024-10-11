import "./App.css";
import BalanceBike from "./BalanceBike";
import "./Roboto.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Hero'

function App() {
  return (
    <>
      
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<BalanceBike />} />
          </Routes>
        </Router>
        <Hero />
      </div>
    </>
  );
}

export default App;
