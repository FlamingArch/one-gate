import { Route, Routes } from "react-router-dom";
import PageHome from "./routes/Home";
import PageLogin from "./routes/Login";
import PageSignUp from "./routes/SignUp";

export default function AppRouter() {
  return <Routes>
    <Route path="/" element={<PageHome />} />
    <Route path="/login" element={<PageLogin />} />
    <Route path="/signup" element={<PageSignUp />} />
  </Routes>
}
