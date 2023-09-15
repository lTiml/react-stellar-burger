import styles from "./burger-section.module.css";
import PropTypes from "prop-types";

const BurgerSection = (props) => {
	return (
		<div className={styles.container}>
			<h2 className="text text_type_main-medium">{props.title}</h2>
			<div className={styles.layout}>{props.children}</div>
		</div>
	);
};

BurgerSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default BurgerSection;