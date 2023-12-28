import styles from "./info-item.module.css";

interface IInfoItemPropTypes {
	text: string
	info: number
}

function InfoItem({text, info}: IInfoItemPropTypes) {
	return (
		<div className={styles.container}>
			<p className="text text_type_main-default text_color_inactive">{text}</p>
			<p className="text text_type_main-default text_color_inactive">{info}</p>
		</div>
	);
};

export default InfoItem;