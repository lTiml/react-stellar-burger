import styles from "./burger-constructor.module.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../services/actions/order";
import { useDrop } from "react-dnd";
import { addIngredients, addBun } from "../../services/actions/constructor";
import { ingredient } from "../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from "./burger-items/burger-items";
import Modal from "../modal/modal";
import OrderDetails from "../modal/order-details/order-details";
import { setOrderNumberSuccess } from "../../services/actions/order";
import { isUserLogin } from "../../utils/func";
import { LOGIN_PATH } from "../app/router/config/routes";
import { useNavigate } from "react-router-dom";
import { Count } from "./count/Count";
import { Loader } from "../loader/Loader";

const BurgerConstructor = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const orderNumber = useSelector(state => state.orderReducer.order);
	const constructorIngredients = useSelector(
		state => state.burgerConstructorReducer.ingredients
	);
	const constructorBun = useSelector(
		state => state.burgerConstructorReducer.bun
	);
	const [clickedModal, setClickedModal] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	const isLoading = useSelector(state => state.orderReducer.isLoading)

	useEffect(() => {
		let price = 0;
		if (constructorBun !== null) {
			price += constructorBun.price * 2;
		}
		if (constructorIngredients.length !== 0) {
			price += constructorIngredients.reduce(
				(acc, curr) => acc + curr.ingredient.price,
				0
			);
		}
		setTotalPrice(price)
	}, [constructorBun, constructorIngredients]);

	const [{ isHover, isDrop }, dropRef] = useDrop({
		accept: "ingredient",
		drop(item) {
			item.type === ingredient.bun
				? dispatch(addBun(item))
				: dispatch(addIngredients(item));
		},
		collect: (monitor) => ({
			isHover: monitor.isOver(),
			isDrop: monitor.canDrop(),
		}),
	});
	const borderStyle = isHover
		? styles.borderIn
		: isDrop
		? styles.borderOut
		: styles.borderNone;

	const getIngredientId = () => {
		const ingredientId = constructorIngredients.map(item => item.ingredient._id);
		const bunId = constructorBun._id;
		return [bunId, ...ingredientId, bunId];
	};

	const handleCreateOrder = () => {
		if (!isUserLogin()) {
			navigate(LOGIN_PATH);
		}
		const ingredientId = getIngredientId();
		dispatch(createOrder(ingredientId));
		setClickedModal(true);
	};
	const handleCloseModal = value => {
		setClickedModal(value);
		dispatch(setOrderNumberSuccess(null));
	};

	return (
		<div className={`${styles.container} pl-4 pr-4`}>
			<div className={`${styles.dropContainer} ${borderStyle} pt-5 pb-5`} ref={dropRef}>
				{(constructorBun !== null || constructorIngredients.length !== 0) && (
					<BurgerItems
						constructorIngredients={constructorIngredients}
						constructorBun={constructorBun}
					/>
				)}
				<div className={styles.totalCounter}>
					<div className={styles.total}>
						<p className='text text_type_digits-medium pr-2'>{totalPrice}</p>
						<CurrencyIcon />
					</div>

					{/* <Count totalPrice={totalPrice} type='medium' /> */}
					<Button
						htmlType="button"
						type="primary"
						size="medium"
						onClick={handleCreateOrder}
						disabled={constructorBun === null}
					>
						Нажми на меня
					</Button>
				</div>
				{clickedModal && (
					<Modal onClose={handleCloseModal}>
						<OrderDetails orderNumber={orderNumber} />
						{isLoading && <Loader />}
					</Modal>
				)}
			</div>
		</div>
	);
};

export default BurgerConstructor;