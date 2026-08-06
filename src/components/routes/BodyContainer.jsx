import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";
import MovieDetails from "../MovieDetails";
const BodyContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:movieId" element={<MovieDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default BodyContainer;
