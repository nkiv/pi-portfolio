import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Footer from "./Footer";
import Resume from "./Resume";
import About from "./About";
import Games from "./Games";
import GameDetail from "./GameDetail";

function App() {
  return (
    <>
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
