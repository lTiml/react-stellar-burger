import styles from "./burger-items.module.css";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { moveProduct } from "../../../services/actions/constructor";
import { BurgerItem } from "../burger-item/burger-item";
import { useCallback } from 'react';
import update from "immutability-helper";
import { ingredientPropType, selectedIngredientsPropTypes } from "../../../utils/prop-types";

const BurgerItems = ({ constructorIngredients, constructorBun }) => {
	const dispatch = useDispatch();
	const bun = constructorBun;
	const elseProducts = constructorIngredients;

	const moveItem = useCallback((dragIndex, hoverIndex, elseProducts) => {
		const newProduct = update(elseProducts, {
			$splice: [
				[dragIndex, 1],
				[hoverIndex, 0, elseProducts[dragIndex]],
			],
		});
		dispatch(moveProduct(newProduct));
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{bun !== null && (
					<ConstructorElement
						type={bun.type}
						isLocked
						text={`${bun.name} (верх)`}
						price={bun.price}
						thumbnail={bun.image_mobile}
					/>
				)}
			</div>

			<div className={`${styles.scroll} custom-scroll`}>
				{elseProducts.map((ingred, index) => (
					<BurgerItem
						moveItem={moveItem}
						index={index}
						key={ingred.key}
						id={ingred.ingredient._id}
						item={ingred.ingredient}
						elseProducts={elseProducts}
					/>
				))}
			</div>

			<div className={styles.content}>
				{bun !== null && (
					<ConstructorElement
						type={bun.type}
						isLocked
						text={`${bun.name} (низ)`}
						price={bun.price}
						thumbnail={bun.image_mobile}
					/>
				)}
			</div>

		</div>
	);
};

BurgerItems.propTypes = {
	constructorBun: ingredientPropType,
	constructorIngredients: selectedIngredientsPropTypes,
};

export default BurgerItems;