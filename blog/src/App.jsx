import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetalhesPost from "./pages/DetalhesPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<DetalhesPost />} />
      </Routes>
    </Router>
  );
}

export default App;