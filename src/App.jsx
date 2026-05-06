import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Map from "./pages/Map";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/map-page" element={<Map/>} />

      </Routes>
    </Router>
  );
};

export default App;