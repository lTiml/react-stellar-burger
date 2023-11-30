import styles from './Count.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const Count = ({ totalPrice, type }) => {
	return (
		<div className={styles.count}>
			<p className={`text text_type_digits-${type} pr-2`}>{totalPrice}</p>
			<CurrencyIcon />
		</div>
	)
}