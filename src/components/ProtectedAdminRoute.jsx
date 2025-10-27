import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkExpiry } from "@/redux/slices/authSlice";

const ProtectedAdminRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticatedRedux = useSelector(
    (state) => state.auth?.isAuthenticated
  );

  // fallback in case Redux is not yet ready on initial load:
  const isAuthenticatedLocal =
    localStorage.getItem("isAuthenticated") === "true";

  dispatch(checkExpiry());
  const isAuthenticated = isAuthenticatedRedux || isAuthenticatedLocal;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children ?? null;
};

export default ProtectedAdminRoute;
