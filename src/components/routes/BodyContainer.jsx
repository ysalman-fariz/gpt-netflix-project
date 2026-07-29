import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";


const BodyContainer = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BodyContainer;
