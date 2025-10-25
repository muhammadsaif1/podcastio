import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedAdminRoute = ({ children }) => {
  const isAuthenticatedRedux = useSelector(
    (state) => state.auth?.isAuthenticated
  );

  // fallback in case Redux is not yet ready on initial load:
  const isAuthenticatedLocal =
    localStorage.getItem("isAuthenticated") === "true";

  const isAuthenticated = isAuthenticatedRedux || isAuthenticatedLocal;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children ?? null;
};

export default ProtectedAdminRoute;
