import { Route, Routes } from "react-router-dom";
import PageHome from "./routes/Home";

export default function AppRouter() {
  return <Routes>
    <Route path="/" element={<PageHome />} />
  </Routes>
}
