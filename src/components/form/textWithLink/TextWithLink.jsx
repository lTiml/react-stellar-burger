import styles from "./TextWithLink.module.css";

import { Link } from 'react-router-dom';

export const TextWithLink = ({ text, textLink, path }) => {
	return (
		<div className={styles.text}>
			<p className="text text_type_main-default text_color_inactive">{text}</p>
			<Link to={path} className={styles.link}>
				<p className="text text_type_main-small">{textLink}</p>
			</Link>
		</div>
	)
}