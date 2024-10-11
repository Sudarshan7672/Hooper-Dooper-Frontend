import "./App.css";
import BalanceBike from "./BalanceBike";
import "./Roboto.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<BalanceBike />} />
            <Route path="/products" element={<BalanceBike />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
