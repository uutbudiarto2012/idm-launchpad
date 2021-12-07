import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import Create from "./pages/Create";
import Finish from "./pages/Finish";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/list" element={<p className="text-center my-5">ON PROGRESS...</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
