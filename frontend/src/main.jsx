import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/" exact />
        <Route element={<HomePage />} path="/home" />
      </Routes>
    </Router>
  </React.StrictMode>
);
