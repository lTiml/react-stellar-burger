import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingridients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
	const dispatch = useDispatch();
	const ingredients = useSelector(
		state => state.ingredientsReducer.ingredients
	);

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

	const contentBurgerIngredients = useMemo(() => {
		if (!ingredients) {
			return <div>Loading...</div>
		} else {
			return <BurgerIngredients />
		}
	}, [ingredients]);

  return (
    <div className={styles.app}>
			<AppHeader/>
			<div className={styles.container}>
				<DndProvider backend={HTML5Backend}>
					<div>
						<h1 className="text text_type_main-large">Соберите бургер</h1>
						{contentBurgerIngredients}
					</div>
					<div className="pl-4 pr-4">
						{ingredients && <BurgerConstructor />}
					</div>
				</DndProvider>
			</div>
    </div>
  );
}

export default App;
