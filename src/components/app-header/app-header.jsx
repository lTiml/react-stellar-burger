import styles from "./app-header.module.css";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderLink from "./app-header-link/app-header-link";
import { Link, useMatch } from "react-router-dom";
import { HOME, PROFILE, FEED_PATH } from "../app/router/config/routes";


const AppHeader = () => {
	const isProfileActive = useMatch(PROFILE);
	const isConstructorActive = useMatch(HOME);
	const isFeedActive = useMatch(FEED_PATH);

	return (
		<header className={`${styles.header}`}>
			<div className={styles.list}>
				<div className={styles.linkContainer}>
					<Link to={HOME} className={isConstructorActive ? styles.linkActive : styles.link}>
						<AppHeaderLink>
							<BurgerIcon type="primary" />
							<p className="text text_type_main-default">Конструктор</p>
						</AppHeaderLink>
					</Link>

					<Link to={FEED_PATH} className={isFeedActive ? styles.linkActive : styles.link}>
						<AppHeaderLink>
							<ListIcon type="secondary" />
							<p className="text text_type_main-default">Лента заказов</p>
						</AppHeaderLink>
					</Link>
				</div>

				<Link to={PROFILE} className={isProfileActive ? styles.linkActive : styles.link}>
					<AppHeaderLink>
						<ProfileIcon type="secondary" />
						<p className="text text_type_main-default">Личный кабинет</p>
					</AppHeaderLink>
				</Link>

			</div>

			<Link to={HOME} className={styles.logo}>
				<Logo />
			</Link>

		</header>
	)
}

export default AppHeader;