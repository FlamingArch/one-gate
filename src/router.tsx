import { Route, Routes } from "react-router-dom";
import PageHome from "./routes/Home";
import PageLogin from "./routes/Login";

export default function AppRouter() {
  return <Routes>
    <Route path="/" element={<PageHome />} />
    <Route path="/login" element={<PageLogin />} />
  </Routes>
}
