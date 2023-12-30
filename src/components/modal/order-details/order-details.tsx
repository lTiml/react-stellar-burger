import styles from "./order-details.module.css";

import doneImage from "../../../images/done.svg";

type TOrderDetails = {
	orderNumber: number;
}

const OrderDetails = ({ orderNumber }: TOrderDetails) => {
	return (
		<div className={styles.container}>
			<p className="text text_type_digits-large pb-4">{orderNumber}</p>
			<p className="text text_type_main-medium">идентификатор заказа</p>
			<img src={doneImage} alt="Иконка готового заказа" className="pt-15 pb-15"></img>
			<p className="text text_type_main-default">Ваш заказ начали готовить</p>
			<p className="text text_type_main-default text_color_inactive pt-2">дождитесь готовности на орбитальной стацнии</p>
		</div>
	);
};

export default OrderDetails;