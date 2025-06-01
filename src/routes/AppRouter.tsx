import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Login } from "../pages/LoginPage/LoginPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Caso a rota não exista, redireciona para login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
