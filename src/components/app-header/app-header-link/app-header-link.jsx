import styles from './app-header-link.module.css';

import PropTypes from "prop-types";

const AppHeaderLink = props => {
	return (
		<span className={`${styles.appHeaderLink}`}>
			{props.children}
		</span>
	)
}

AppHeaderLink.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppHeaderLink;