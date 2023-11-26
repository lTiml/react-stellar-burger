import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_PATH } from "../config/routes";
import { isUserLogin } from "../../../../utils/func";

export const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const from = location.state?.from || "/";

	if (!isUserLogin()) {
		return <Navigate to={LOGIN_PATH} state={{ from: location }} />;
	}

	return <>{children}</>
};