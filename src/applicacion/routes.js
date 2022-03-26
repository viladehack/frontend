import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import HappyViller from "../pages/happyViller/HappyViller";
import Header from "../components/Header";
import Sign from "../pages/sign/Sign";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HappyViller" element={<HappyViller />} />
        <Route path="/Sign" element={<Sign />} />
        <Route
          path="*"
          element={
            <div className="background">
              <Header />
              <span>ERROR 404</span>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Path;
