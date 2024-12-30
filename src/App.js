import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Btech from "./pages/Btech";
import Chanakya from "./pages/Chanakya";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/btech" element={<Btech/>} />
        <Route path="/chanakya" element={<Chanakya/>} />
        
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;