import styles from "./burger-constructor.module.css";

import { useState } from "react";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";

const BurgerConstructor = ({ingred}) => {
	const [clickedModal, setClickedModal] = useState(false);

	const handleOpenModal = () => {
		setClickedModal(true)
	}
	const handleCloseModal = (value) => {
		setClickedModal(value)
	}

	return (
		<div className={`${styles.container} pl-4 pr-4`}>
			<BurgerItems data={ingred} topBunId="643d69a5c3f7b9001cfa093c" bottomBunId="643d69a5c3f7b9001cfa093c" />
			<div className={styles.totalContainer}>
				<div className={styles.total}>
					<p className="text text_type_digits-medium pr-2">{ingred.reduce((p, v) => {
						return p + v.price}, 0)}</p>
					<CurrencyIcon />
				</div>
				<Button htmlType="button" type="primary" size="medium" onClick={handleOpenModal}>
					Нажми на меня
				</Button>
			</div>
			{clickedModal && 
			<Modal onClose={handleCloseModal}>
				<OrderDetails/>
			</Modal>}
		</div>
	);
};

BurgerConstructor.propTypes = {
	ingred: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_mobile: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			__v: PropTypes.number.isRequired,
		}).isRequired
	).isRequired
}

export default BurgerConstructor;