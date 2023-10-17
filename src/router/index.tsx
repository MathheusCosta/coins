import { Route, Routes } from "react-router-dom";
import Home from "@/screens/Home";
import Login from "@/screens/Login";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);
