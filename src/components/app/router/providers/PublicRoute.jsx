import { Navigate, useLocation } from "react-router-dom";
import { isUserLogin } from "../../../../utils/func";

export const PublicRoute = ({ children }) => {
	const location = useLocation();
	const from = location.state?.from || "/";

	if (isUserLogin()) {
		return <Navigate to={from} />;
	}

	return <>{children}</>
}