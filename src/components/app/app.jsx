import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import { getIngredients } from "../../services/actions/ingredients";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {
	HOME,
	LOGIN_PATH,
	PROFILE,
	FORGOT_PASSWORD,
	INGREDIENT_INFO_PATH,
	ORDERS_PATH,
	ORDERS_ID_PATH,
	REGISTRATION_PATH,
	RESET_PASSWORD,
	FEED_PATH,
	FEED_ID_PATH
} from "./router/config/routes";
import {
	BurgerConstructorPage,
	LoginPage,
	ProfilePage,
	OrdersPage,
	RegistrationPage,
	ForgotPasswordPage,
	ResetPasswordPage,
	IngredientDetailsPage,
	FeedPage,
	OrderInfoPage,
} from "../../pages";
import { PrivateRoute } from "./router/providers/PrivateRoute";
import { PublicRoute } from "./router/providers/PublicRoute";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { OrderInfo } from "../modal/order-info/OrderInfo";
import { Loader } from "../loader/Loader";

export const App = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const bg = location.state?.background;
	const handleCloseModal = () => {
		navigate(-1);
	};
	useEffect(() => {
		dispatch(getIngredients());
	}, []);

  return (
    <div className={styles.app}>
			<AppHeader/>
			<Routes location={bg || location}>
				<Route path={HOME} element={<BurgerConstructorPage />} />
				<Route path={PROFILE} element={
					<PrivateRoute>
						<ProfilePage />{' '}
					</PrivateRoute>
				} />
				<Route path={INGREDIENT_INFO_PATH} element={<IngredientDetailsPage />} />
				<Route path={REGISTRATION_PATH} element={
					<PublicRoute>
						<RegistrationPage />
					</PublicRoute>
				} />
				<Route path={LOGIN_PATH} element={
					<PublicRoute>
						<LoginPage />
					</PublicRoute>
				} />
				<Route path={FORGOT_PASSWORD} element={
					<PublicRoute>
						<ForgotPasswordPage />
					</PublicRoute>
				} />
				<Route path={RESET_PASSWORD} element={
					<PublicRoute>
						<ResetPasswordPage />
					</PublicRoute>
				} />
				<Route path={ORDERS_PATH} element={
					<PrivateRoute>
						<OrdersPage />
					</PrivateRoute>
				} />
				<Route path={FEED_PATH} element={<FeedPage />} />
				<Route path={FEED_ID_PATH} element={<OrderInfoPage feed />} />
				<Route path={ORDERS_ID_PATH} element={
					<PrivateRoute>
						<OrderInfoPage />
					</PrivateRoute>
				} />
			</Routes>

			{bg && (
				<Routes>
					<Route path={INGREDIENT_INFO_PATH} element={
						<Modal title={"Детали ингредиентов"} onClose={handleCloseModal}>
							<IngredientDetails />
						</Modal>
					} />
					<Route path={FEED_ID_PATH} element={
						<Modal onClose={handleCloseModal}>
							<OrderInfo modal />
						</Modal>
					} />
					<Route path={ORDERS_ID_PATH} element={
						<Modal onClose={handleCloseModal}>
							<OrderInfo modal />
						</Modal>
					} />
				</Routes>
			)}

    </div>
  );
};