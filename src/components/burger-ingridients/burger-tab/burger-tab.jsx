import styles from "./burger-tab.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerTab = ({activeTab, setActiveTab}) => {

	return (
		<div className={styles.container}>
			<Tab value="Bun" active={activeTab === "Bun"} onClick={() => setActiveTab('Bun')}>
				Булки
			</Tab>
			<Tab value="Sauce" active={activeTab === "Sauce"} onClick={() => setActiveTab('Sauce')}>
				Соусы
			</Tab>
			<Tab value="Main" active={activeTab === "Main"} onClick={() => setActiveTab('Main')}>
				Начинки
			</Tab>
		</div>
	);
};

export default BurgerTab;