import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Test from "./pages/Test";
const MyRouter = () => {
  return (
    <BrowserRouter> {/*history stack을 생성 및 관리*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;