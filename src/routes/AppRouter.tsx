import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Login } from "../pages/LoginPage/LoginPage";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
