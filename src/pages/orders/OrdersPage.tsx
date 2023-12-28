import styles from './OrdersPage.module.css';

import { useDispatch, useSelector} from '../../services/store/store.types';
import { useEffect } from 'react';
import { getCookie } from '../../utils/cookie';
import { profileOrders } from '../../services/selectors/selectors';
import { userOrdersUrl } from '../../utils/api/api';
import { connectProfile, disconnectProfile } from '../../services/actions/feed-profile';
import { FeedCards } from '../../components/feed/feedCards/FeedCards';
import { ProfileNav } from '../../components/profile/profileNav/profileNav';

export const OrdersPage = () => {
	const dispatch = useDispatch();
	const orders = useSelector(profileOrders);
	const accessToken = getCookie("accessToken");
	const token = accessToken?.split("Bearer ")[1];
	const url = userOrdersUrl(token ? token : '');

	useEffect(() => {
		dispatch(connectProfile(url));
		return () => {
			dispatch(disconnectProfile())
		};
	}, [dispatch, url])
	

	return (
		<div className={styles.page}>
			<ProfileNav />
			<FeedCards type="orders" orders={orders} />
		</div>
	)
}