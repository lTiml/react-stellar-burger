import styles from './FeedOrders.module.css';

import { FeedList } from '../feedList/FeedList';

export const FeedOrders = ({ total, totalToday, orders }) => {
	const doneOrdersNumbers = orders.filter(order =>
		order.status === 'done').map(order => order.number);

	const ordersNumbersInProgress = orders.filter(order =>
		order.status !== 'done').map(order => order.number);

	return (
		<section className={styles.container}>
			<div className={styles.feedList}>
				<div className={styles.orders}>
					{doneOrdersNumbers.length > 10 ? (
						<FeedList
							done
							columns
							heading="Готовы"
							numbers={doneOrdersNumbers}
						/>
					) : (
						<FeedList done heading="Готовы:" numbers={doneOrdersNumbers} />
					)}
					{ordersNumbersInProgress > 10 ? (
						<FeedList
							columns
							heading="В работе:"
							numbers={ordersNumbersInProgress}
						/>
					) : (
						<FeedList heading="В работе:" numbers={ordersNumbersInProgress} />
					)}
				</div>
				<div className={styles.doneOrders}>
					<p className='text text_type_main-medium'>Выполнено за все время:</p>
					<p className={`text text_type_digits-large ${styles.shadow}`}>{total}</p>
				</div>
				<div className={styles.doneOrders}>
					<p className='text text_type_main-medium'>Выполнено за сегодня:</p>
					<p className={`text text_type_digits-large ${styles.shadow}`}>{totalToday}</p>
				</div>
			</div>
		</section>
	)
}