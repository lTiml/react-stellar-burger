import { Navigate, useLocation } from "react-router-dom";
import { isUserLogin } from "../../../../utils/func";
import { FC } from "react";

export const PublicRoute:FC = ({ children }) => {
	const location = useLocation();
	const from = location.state?.from || "/";

	if (isUserLogin()) {
		return <Navigate to={from} />;
	}

	return <>{children}</>
}