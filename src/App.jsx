import React from "react";
import { Home } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./Components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
