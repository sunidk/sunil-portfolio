import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";

const Home = lazy(() => import("./Components/Home/Home"));
const Project = lazy(() => import("./Components/Project/Project"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
