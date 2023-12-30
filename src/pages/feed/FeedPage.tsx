import styles from './FeedPage.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store/store.types';
import { allOrdersUrl } from '../../utils/api/api';
import { connectFeed, disconnectFeed } from '../../services/actions/feed';
import { Loader } from '../../components/loader/Loader';
import { FeedCards } from '../../components/feed/feedCards/FeedCards';
import { FeedOrders } from '../../components/feed/feedOrders/FeedOrders';

export const FeedPage = () => {
	const dispatch = useDispatch();
	const ordersFeed = useSelector(store => store.feedReducer.orders);
	const totalFeed = useSelector(store => store.feedReducer.total);
	const totalTodayFeed = useSelector(store => store.feedReducer.totalToday);
	const isLoading = useSelector(store => store.feedReducer.isLoading);

	useEffect(() => {
		dispatch(connectFeed(allOrdersUrl))
		return () => {
			dispatch(disconnectFeed())
		}
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<p className='text text_type_main-large'>Лента заказов</p>
			<div className={styles.content}>
				{ordersFeed !== null && <FeedCards orders={ordersFeed} type="feed" />}
				{totalFeed && totalTodayFeed && (<FeedOrders total={totalFeed} totalToday={totalTodayFeed} orders={ordersFeed}/>)}
			</div>
			{isLoading && <Loader/>}
		</div>
	)
}