import styles from './FeedCards.module.css';

import { FeedCard } from '../feedCard/FeedCard';

export const FeedCards = ({ type, orders }) => {
	return (
		<section className={`${styles.container} custom-scroll`}>
			{orders.map(order => (
				<FeedCard type={type} order={order} key={order.number} />
			))}
		</section>
	);
};