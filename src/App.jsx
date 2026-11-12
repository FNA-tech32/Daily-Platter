import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
