import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "./AuthProvider.jsx";
import LoadingSkeleton from "../component/LoadingSkeleton.jsx";

const ProtectedRoute = ({ children }) => {
const { isAuthenticated, loading } = useContext(AuthContext);

if (loading) return <LoadingSkeleton />;
if (!isAuthenticated) return <Navigate to="/login" replace />;
return children;

};
export default ProtectedRoute;