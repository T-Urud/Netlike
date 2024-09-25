import React from "react";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieInfos from "./page/MovieInfos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
