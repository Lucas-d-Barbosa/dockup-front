import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Login } from "../pages/Login/Login";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
