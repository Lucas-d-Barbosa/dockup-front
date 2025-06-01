import { Navigate } from "react-router";

type PrivateRouteProps = {
  children: React.ReactNode;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = Boolean(localStorage.getItem("token")); // ou sua lógica de autenticação

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
