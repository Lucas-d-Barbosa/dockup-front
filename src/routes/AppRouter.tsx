import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Login } from "../pages/LoginPage/LoginPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
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
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Caso a rota não exista, redireciona para login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
