import { useState } from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"; // use named import since Home is exported with `export const`
import { Favorites } from "./pages/Favorites";
import { Navbar } from "./components/Navbar";
import { Provider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/> {/* default command to display an element */}
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;