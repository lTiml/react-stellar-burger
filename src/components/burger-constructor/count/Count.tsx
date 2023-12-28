import styles from './Count.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface ITotalCountProppTypes {
	totalPrice: number
	type: string
}

export const Count = ({ totalPrice, type }: ITotalCountProppTypes) => {
	return (
		<div className={styles.count}>
			<p className={`text text_type_digits-${type} pr-2`}>{totalPrice}</p>
			<CurrencyIcon type='primary' />
		</div>
	)
}