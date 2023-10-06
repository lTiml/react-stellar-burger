import styles from "./burger-card.module.css";

import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerCard = (props) => {
	return (
		<div className={styles.container} onClick={props.onClick}>
			<img src={props.img} alt={props.description} className="pl-4 r-4"></img>
			<div className={`${styles.price} pt-1 pb-2`}>
				<p className="text text_type_digits-medium pr-2">{props.price}</p>
				<CurrencyIcon></CurrencyIcon>
			</div>
			<p className={`${styles.description} text text_type_main-default`}>{props.description}</p>
			{props.count >= 1 && 
			<Counter count={props.count} size="default" extraClass="m-1" />
			}
		</div>
	);
};

BurgerCard.propTypes = {
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	count: PropTypes.number,
	onClick: PropTypes.func.isRequired,
};

export default BurgerCard;