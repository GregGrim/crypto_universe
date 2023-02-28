import React from "react";
import "./App.css";
import Login from "./LoginPage/Login.js";
import StartPage from "./StartPage/StartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register.js";

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
