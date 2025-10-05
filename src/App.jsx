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
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/resume"}>Resume</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/games"}>Games</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />}>
            <Route path=":gameId" element={<GameDetail />} />
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
