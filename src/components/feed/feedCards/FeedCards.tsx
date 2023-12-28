import styles from './FeedCards.module.css';

import { FeedCard } from '../feedCard/FeedCard';
import { IFeedOrder } from '../../../services/types/feed';

interface IFeedCardsPropTypes {
	type: 'orders' | 'feed'
	orders: IFeedOrder[];
}

export const FeedCards = ({ type, orders }: IFeedCardsPropTypes) => {
	return (
		<section className={`${styles.container} custom-scroll`}>
			{orders.map(order => (
				<FeedCard type={type} order={order} key={order.number} />
			))}
		</section>
	);
};