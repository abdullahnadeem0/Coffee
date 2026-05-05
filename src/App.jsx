import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail" element={<Detail/>} />

      </Routes>
    </Router>
  );
};

export default App;