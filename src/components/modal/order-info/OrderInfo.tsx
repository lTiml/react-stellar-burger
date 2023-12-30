import styles from './OrderInfo.module.css';

import { useSelector } from '../../../services/store/store.types';
import { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientDetails } from './ingredient-details/IngredientDetails';
import { Count } from '../../burger-constructor/count/Count';
import { IIngredient } from '../../../services/types/ingredients';
import { IFeedOrder } from '../../../services/types/feed';

type TOrderInfoPropTypes = {
	modal?: boolean
}

export const OrderInfo = ({ modal }: TOrderInfoPropTypes) => {
	let currentOrder: IFeedOrder | null | undefined = null;
	const location = useLocation();
	const ingredients = useSelector(store => store.ingredientsReducer.allIngredients);
	const ordersFeed = useSelector(store => store.feedReducer.orders);
	const profileOrder = useSelector(store => store.profileFeedReducer.orders);
	const { number } = useParams();

	const orderStatus: Record<string, string> = {
		done: 'Выполнен',
		created: 'Создан',
		pending: 'Готовится',
	}

	if (location.pathname.includes("/profile/orders")) {
		currentOrder = profileOrder?.find((order: IFeedOrder) => order.number == Number(number));
	} else if (location.pathname.includes("/feed")) {
		currentOrder = ordersFeed?.find((order: IFeedOrder) => order.number == Number(number));
	}

	const currentOrderIngredients = useMemo(() => {
		if (currentOrder?.ingredients) {
			return currentOrder.ingredients.map(ingredientId => {
				return ingredients.find(ingredient => ingredientId === ingredient._id)
			})
		}
		return [];
	}, [currentOrder?.ingredients, ingredients]);

	const numberOfIngredients = (ingredient: IIngredient | undefined) => {
		if(!ingredient) return
		return currentOrderIngredients?.filter(item => item?._id === ingredient._id).length;
	}

	const orderPrice = () => {
		return currentOrderIngredients?.reduce((acc, i) => acc + Number(i?.price), 0);
	}

	const uniqueIngredients = Array.from(new Set(currentOrderIngredients));

	return (
		<div className={styles.container}>
			<p className={`text text_type_digits-default ${modal ? styles.orderModal : styles.order}`}>
				{`#${currentOrder?.number}`}
			</p>
			<p className='text text_type_main-medium pb-2'>{currentOrder?.name}</p>
			<p className={`text text_type_main-default ${styles.blue}`}>
				{currentOrder && orderStatus[currentOrder?.status]}
			</p>
			<div className={styles.components}>
				<p className='text text_type_main-medium'>Состав:</p>
				<ul className={`${styles.list} custom-scroll`}>
					{uniqueIngredients?.map((ingredient, index) => (
						<IngredientDetails ingredient={ingredient} key={index} quantity={numberOfIngredients(ingredient)} />
					))}
				</ul>
			</div>
			<div className={styles.info}>
				<p className='text text_type_main-default text_color_inactive'>
					{currentOrder && <FormattedDate date={new Date(currentOrder?.createdAt)} />}
				</p>
				<Count totalPrice={orderPrice()} type="default" />
			</div>
		</div>
	)
}