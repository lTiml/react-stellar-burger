import styles from './IngredientDetails.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const IngredientDetails = ({ ingredient, quantity }) => {
	return (
		<li className={styles.ingredient}>
			<div className={styles.info}>
				<div className={styles.imageContainer}>
					<img className={styles.icon} src={ingredient?.image} alt={ingredient?.name}/>
				</div>
				<p className="text text_type-main-default">{ingredient?.name}</p>
			</div>
			<div className={styles.price}>
				<p className='text text_type_digits-default pr-2'>{`${quantity} x ${ingredient?.price}`}</p>
				<CurrencyIcon />
			</div>
		</li>
	)
}