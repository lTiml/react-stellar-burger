import styles from './FeedCard.module.css';

import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { allIngredients } from '../../../services/selectors/selectors';
import { Count } from '../../burger-constructor/count/Count';

export const FeedCard = ({ type, order }) => {
	const location = useLocation();
	const ingredients = useSelector(allIngredients);

	const orderIngredients = useMemo(() => {
		if (order?.ingredients) {
			return order.ingredients.map(ingredientId => {
				return ingredients.find(
					ingredient => ingredientId === ingredient._id
				);
			});
		}
		return [];
	}, [order?.ingredients, ingredients]);

	const orderPrice = () => {
		return orderIngredients?.reduce((acc, i) => acc + i.price, 0);
	}

	const orderPart = orderIngredients?.slice(6).length;
	const orderStatus = {
		done: "Выполнен",
		created: "Создан",
		pending: "Готовится",
	}

	return (
		<Link
			className={styles.link}
			key={order.number}
			to={`${order.number}`}
			state={{ background: location }}
		>
			<div className={styles.card}>
				<span className={styles.heading}>
					<p className='text text_type_digits-default'>{`#${order.number}`}</p>
					<p className='text text_type_main-default text_color_inactive'>
						<FormattedDate date={new Date(order.createdAt)} />
					</p>
				</span>
				<div className={styles.description}>
					<p className='text text_type_main-medium'>{order.name}</p>
					{type === "orders" &&
					(order.status === "done" ? (
						<p className={`text text_type_main-default ${styles.status} pt-2`}>
							{orderStatus[order.status]}
						</p>
					) : (
						<p className="text text_type_main-default pt-2">
							{orderStatus[order.status]}
						</p>
					))}
				</div>
				<div className={styles.footer}>
					<div className={styles.container}>
						{orderIngredients.map((ingredient, index) => {
							if (index < 6) {
								return (
									<div className={styles.imageWrapper} key={index}>
										<img
											className={styles.icon}
											src={ingredient.image}
											alt={ingredient.name}
										/>
										{index === 5 && orderPart !== 0 && (
											<div className={styles.counter}>
												<p className="text text_type_digits-default">{`+${orderPart}`}</p>
											</div>
										)}
									</div>
								)
							}
						})}
					</div>
					<Count totalPrice={orderPrice()} type="default" />
				</div>
			</div>
		</Link>
	)
}
