import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import AddEmployee from "./components/AddEmployee";


function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Routes>    
          <Route path="/emp" element={<AddEmployee/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
