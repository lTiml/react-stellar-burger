import styles from './profileNav.module.css';

import { useDispatch } from '../../../services/store/store.types';
import { useNavigate, useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../../services/actions/logout';
import { LOGIN_PATH, PROFILE } from '../../app/router/config/routes';

export const ProfileNav = () => {
	const isProfileActivated = useMatch("/profile");
	const isProfileOrderActivated = useMatch("/profile/orders");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const refresh = localStorage.getItem("refresh");
	const logout = async () => {
		try {
			if(!refresh) return
			await dispatch(logoutAction(refresh));
			navigate(LOGIN_PATH);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className={styles.container}>
			<Link
				to={PROFILE}
				className={`text text_type_main-medium text_color_inactive ${styles.link} ${isProfileActivated ? styles.linkActive : ""}`}
			>
				Профиль
			</Link>
			<Link
				to={"/profile/orders"}
				className={`text text_type_main-medium text_color_inactive ${styles.link} ${isProfileOrderActivated ? styles.linkActive : ""}`}
			>
				История заказов
			</Link>
			<a className={styles.link} onClick={logout}>
				<p className="text text_type_main-medium">Выход</p>
			</a>
			<p className={`${styles.description} text text_type_main-small`}>
				В этом разделе вы можете изменить свои персональные данные
			</p>
		</div>
	)
}