import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* "/" = landing page */}
        <Route path="/" element={<Landing />} />

      </Routes>
    </Router>
  );
};

export default App;