import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route element={<LoginPage />} path="/" exact />
      </Routes>
      <PrivateRoute element={<HomePage />} path="/home" />
    </Router>
  </React.StrictMode>
);
