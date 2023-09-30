import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "features/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/register' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefresing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefresing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}