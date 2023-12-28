import styles from "./TextWithLink.module.css";

import { Link } from 'react-router-dom';

interface ITextWithLinkPropTypes {
	text: string
	textLink: string
	path: string
}

export const TextWithLink = ({ text, textLink, path }: ITextWithLinkPropTypes) => {
	return (
		<div className={styles.text}>
			<p className="text text_type_main-default text_color_inactive">{text}</p>
			<Link to={path} className={styles.link}>
				<p className="text text_type_main-small">{textLink}</p>
			</Link>
		</div>
	)
}