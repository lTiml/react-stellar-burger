import styles from "./burger-ingridients.module.css";

import BurgerCard from "./burger-card/burger-card";
import BurgerSection from "./burger-section/burger-section";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useMemo, useCallback, useRef } from "react";
import { ingredient } from "../../utils/data";
import { useSelector } from "../../services/store/store.types";

const BurgerIngredients = () => {
	const ingredients = useSelector(state => state.ingredientsReducer.allIngredients);
	localStorage.setItem("ingredients", JSON.stringify(ingredients));
	const selectBun = useSelector(state => state.burgerConstructorReducer.bun)
	const selectIngredients = useSelector(state => state.burgerConstructorReducer.ingredients)

	const buns = useMemo(() => ingredients.filter(item => item.type === ingredient.bun), [ingredients])
	const sauces = useMemo(() => ingredients.filter(item => item.type === ingredient.sauce), [ingredients])
	const main = useMemo(() => ingredients.filter(item => item.type === ingredient.main), [ingredients])

	const [activeTab, setActiveTab] = useState('Bun');
	const tabsRef = useRef<HTMLHeadingElement>(null);
	const bunsRef = useRef<HTMLHeadingElement>(null);
	const saucesRef = useRef<HTMLHeadingElement>(null);
	const mainRef = useRef<HTMLHeadingElement>(null);

	const handleScrollIngredients = () => {
		const tabsBottom = tabsRef.current?.getBoundingClientRect().bottom;
		const bunTop = bunsRef.current?.getBoundingClientRect().top;
		const sauceTop = saucesRef.current?.getBoundingClientRect().top;
		const mainTop = mainRef.current?.getBoundingClientRect().top;

		const TabsBottomPadding = (Number(tabsBottom) - 50);
		const min = bunTop && sauceTop && mainTop && Math.min(
			Math.abs(bunTop - TabsBottomPadding),
			Math.abs(sauceTop - TabsBottomPadding),
			Math.abs(mainTop - TabsBottomPadding)
		);
		const newTab = min === Math.abs(Number(bunTop) - TabsBottomPadding) ? 'Bun' : min === Math.abs(Number(sauceTop) - TabsBottomPadding) ? 'Sauce' : 'Main';
		if (newTab !== activeTab) {
			setActiveTab(newTab)
		}
	}

	const totalCount = useCallback(item => {
		if (selectBun && item.type === ingredient.bun) {
			return selectBun._id === item._id ? 2 : 0
		} else {
			return selectIngredients.filter(elem => elem.ingredient._id === item._id).length
		}
	}, [selectIngredients, selectBun]);

	return (
		<div className={`${styles.container} pt-5`}>

			<div className={styles.tabs} ref={tabsRef}>
				<Tab value="Bun" active={activeTab === "Bun"} onClick={setActiveTab}>Булки</Tab>
				<Tab value="Sauce" active={activeTab === "Sauce"} onClick={setActiveTab}>Соусы</Tab>
				<Tab value="Main" active={activeTab === "Main"} onClick={setActiveTab}>Начинки</Tab>
			</div>

			<div className={`${styles.containerScroll} custom-scroll`} onScroll={handleScrollIngredients}>

				<BurgerSection title={"Булки"} ref={bunsRef}>
					{buns.map(item => (
						<BurgerCard 
							key={item._id}
							item={item}
							img={String(item.image)}
							price={item.price}
							description={item.name}
							count={selectBun !== null ? totalCount(item) : 0}
						/>
					))}
				</BurgerSection>

				<BurgerSection title={"Соусы"} ref={saucesRef}>
					{sauces.map(item => (
						<BurgerCard
							key={item._id}
							item={item}
							img={String(item.image)}
							price={item.price}
							description={item.name}
							count={selectIngredients.length !== 0 ? totalCount(item) : 0}
						/>
					))}
				</BurgerSection>

				<BurgerSection title={"Начинки"} ref={mainRef}>
					{main.map(item => (
						<BurgerCard
							key={item._id}
							item={item}
							img={String(item.image)}
							price={item.price}
							description={item.name}
							count={selectBun === null ? 0 : totalCount(item)}
						/>
					))}
				</BurgerSection>
				
			</div>
		</div>
	);
};

export default BurgerIngredients;