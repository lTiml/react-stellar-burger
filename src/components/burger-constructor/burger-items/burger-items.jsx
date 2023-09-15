import styles from "./burger-items.module.css";

import PropTypes from "prop-types";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { ingredient } from "../../../utils/data";

const BurgerItems = (props) => {
	const buns = useMemo(() => props.data.filter((item) => item.type === ingredient.bun), [props]);
	const products = useMemo(() => props.data.filter((item) => item.type !== ingredient.bun), [props]);
	const topBun = useMemo(() => buns.find((item) => item._id === props.topBunId), [buns, props]);
	const bottomBun = useMemo(() => buns.find((item) => item._id === props.bottomBunId), [buns, props]);

	return (
		<div className={styles.container}>

			<div className={styles.elementContainer}>
				<ConstructorElement 
					type={topBun.type}
					isLocked
					text={topBun.name}
					price={topBun.price}
					thumbnail={topBun.image_mobile}
				/>
			</div>

			<div className={`${styles.scroll} custom-scroll`}>
				{products.map((ingred) => (
					<div className={styles.elementIcon} key={ingred._id}>
						<DragIcon type="primary" />
						<ConstructorElement
							text={ingred.name}
							price={ingred.price}
							thumbnail={ingred.image_mobile}
						/>
					</div>
				))}
			</div>

			<div className={styles.elementContainer}>
				<ConstructorElement
					type={bottomBun.type}
					isLocked
					text={bottomBun.name}
					price={bottomBun.price}
					thumbnail={bottomBun.image_mobile}
				/>
			</div>

		</div>
	);
};

BurgerItems.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.oneOf([ingredient.bun, ingredient.main, ingredient.sauce]).isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_mobile: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			__v: PropTypes.number.isRequired,
		})
	),
	topBunId: PropTypes.string.isRequired,
	bottomBunId: PropTypes.string.isRequired
}

export default BurgerItems;