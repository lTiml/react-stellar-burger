import styles from "./burger-card.module.css";

import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";

const BurgerCard = ({ description, price, img, count, item }) => {
	const [, dragRef] = useDrag({
		type: 'ingredient',
		item: item,
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		})
	});
	const location = useLocation();
	const ingredientId = item._id;

	return (
		<Link 
			className={styles.link}
			key={ingredientId}
			to={`ingredients/${ingredientId}`}
			state={{ background: location }}
		>
			<div className={styles.container} ref={dragRef}>
				<img src={img} alt={description} className="pl-4 pr-4"></img>
				<div className={`${styles.price} pt-1 pb-2`}>
					<p className="text text_type_digits-medium pr-2">{price}</p>
					<CurrencyIcon></CurrencyIcon>
				</div>
				<p className={`${styles.description} text text_type_main-default`}>{description}</p>
				{count >= 1 && <Counter count={count} size="default" extraClass="m-1" />}
			</div>
		</Link>
	);
};

BurgerCard.propTypes = {
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string,
	count: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	item: ingredientPropType,
};

export default BurgerCard;