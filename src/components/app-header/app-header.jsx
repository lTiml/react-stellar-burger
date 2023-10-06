import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
	return (
		<header className={`${styles.header}`}>
			<ul className={styles.headerList}>
				<li className={styles.listItem}>
					<nav>
						<ul className={styles.navigationList}>
							<li className={styles.navigationItem}>
								<a className={styles.navigationLink} href="https://practicum.yandex.ru/">
									<BurgerIcon type="primary" />
									<p className="text text_type_main-default pl-2">Конструктор</p>
								</a>
							</li>
							<li className={styles.navigationItem}>
								<a className={styles.navigationLink} href="https://practicum.yandex.ru/">
									<ListIcon type="secondary" />
									<p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
								</a>
							</li>
						</ul>
					</nav>
				</li>
				<li className={styles.listItem}>
					<a className={styles.navigationLink} href="https://practicum.yandex.ru/">
						<ProfileIcon type="secondary" />
						<p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
					</a>
				</li>
			</ul>
			<div className={styles.logo}>
				<Logo />
			</div>
		</header>
	)
}

export default AppHeader;