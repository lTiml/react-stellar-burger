import styles from "./BurgerConstructorPage.module.css";

import BurgerIngredients from "../../components/burger-ingridients/burger-ingridients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const BurgerConstructorPage = () => {
	const ingredients = useSelector(state => state.ingredientsReducer.ingredients)

	const allBurgerIngredients = useMemo(() => {
		if(!ingredients) {
			return <div>Loading...</div>;
		} else {
			return <BurgerIngredients />
		}
	}, [ingredients]);

	return (
		<div className={styles.container}>
			<DndProvider backend={HTML5Backend}>
				<div>
					<h1 className="text text_type_main-large">Соберите бургер</h1>
					{allBurgerIngredients}
				</div>
				<div className="pl-4 pr-4">
					{ingredients && <BurgerConstructor />}
				</div>
			</DndProvider>
		</div>
	)
}