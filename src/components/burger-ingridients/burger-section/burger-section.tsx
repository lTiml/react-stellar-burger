import styles from "./burger-section.module.css";

import { ReactNode, forwardRef } from 'react';

interface IBurgerSectionPropTypes {
	title: string
	children: ReactNode
}

const BurgerSection = forwardRef<HTMLHeadingElement, IBurgerSectionPropTypes>(({title, children}, ref) => {

	return (
		<div className={styles.container}>
			<h2 className="text text_type_main-medium" ref={ref}>{title}</h2>
			<div className={styles.layout}>{children}</div>
		</div>
	);
}
)

export default BurgerSection;