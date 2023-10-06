import styles from "./info-item.module.css";
import PropTypes from 'prop-types';

function InfoItem({text, info}) {
	return (
		<div className={styles.container}>
			<p className="text text_type_main-default text_color_inactive">{text}</p>
			<p className="text text_type_main-default text_color_inactive">{info}</p>
		</div>
	);
};

InfoItem.propTypes ={
	text: PropTypes.string.isRequired,
	info: PropTypes.number.isRequired,
}

export default InfoItem;