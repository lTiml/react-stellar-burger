import styles from './OrderInfo.module.css';

import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientDetails } from './ingredient-details/IngredientDetails';
import { Count } from '../../burger-constructor/count/Count';
import { allIngredients, profileOrders, orders } from '../../../services/selectors/selectors';
import { ingredient } from '../../../utils/data';

export const OrderInfo = ({ modal }) => {
	let currentOrder;
	const location = useLocation();
	const ingredients = useSelector(allIngredients);
	const ordersFeed = useSelector(orders);
	const profileOrder = useSelector(profileOrders);
	const { number } = useParams();

	const orderStatus = {
		done: 'Выполнен',
		created: 'Создан',
		pending: 'Готовится',
	}

	if (location.pathname.includes("/profile/orders")) {
		currentOrder = profileOrder?.find(order => order.number == number);
	} else if (location.pathname.includes("/feed")) {
		currentOrder = ordersFeed?.find(order => order.number == number);
	}

	const currentOrderIngredients = useMemo(() => {
		if (currentOrder?.ingredients) {
			return currentOrder.ingredients.map(ingredientId => {
				return ingredients.find(ingredient => ingredientId === ingredient._id)
			})
		}
		return [];
	}, [currentOrder?.ingredients, ingredients]);

	const numberOfIngredients = ingredient => {
		return currentOrderIngredients?.filter(item => item._id === ingredient._id).length;
	}

	const orderPrice = () => {
		return currentOrderIngredients?.reduce((acc, i) => acc + i.price, 0);
	}

	const uniqueIngredients = Array.from(new Set(currentOrderIngredients));

	return (
		<div className={styles.container}>
			<p className={`text text_type_digits-default ${modal ? styles.orderModal : styles.order}`}>
				{`#${currentOrder?.number}`}
			</p>
			<p className='text text_type_main-medium pb-2'>{currentOrder?.name}</p>
			<p className={`text text_type_main-default ${styles.blue}`}>
				{orderStatus[currentOrder?.status]}
			</p>
			<div className={styles.components}>
				<p className='text text_type_main-medium'>Состав:</p>
				<ul className={`${styles.list} custom-scroll`}>
					{uniqueIngredients?.mao((ingredient, index) => (
						<IngredientDetails ingredient={ingredient} key={index} quantity={numberOfIngredients(ingredient)} />
					))}
				</ul>
			</div>
			<div className={styles.info}>
				<p className='text text_type_main-default text_color_inactive'>
					<FormattedDate date={new Date(currentOrder?.createdAt)} />
				</p>
				<Count totalPrice={orderPrice()} type="default" />
			</div>
		</div>
	)
}