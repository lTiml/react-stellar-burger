import styles from './OrderInfoPage.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookie';
import { OrderInfo } from '../../components/modal/order-info/OrderInfo';
import { allOrdersUrl, userOrdersIrl } from '../../utils/api/api';
import { connectFeed, disconnectFeed } from '../../services/actions/feed';
import { connectProfile, disconnectProfile } from '../../services/actions/feed-profile';

export const OrderInfoPage = ({ feed }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (feed) {
			dispatch(connectFeed(allOrdersUrl))
		} else {
			const accessToken = getCookie("accessToken");
			const token = accessToken.split("Beaarer ")[1];
			const url = userOrdersIrl(token);
			dispatch(connectProfile(url));
		}
		return () => {
			feed ? dispatch(disconnectFeed(allOrdersUrl)) : dispatch(disconnectProfile());
		}
	}, [dispatch]);

	return (
		<div className={styles.page}>
			<OrderInfo />
		</div>
	)
}