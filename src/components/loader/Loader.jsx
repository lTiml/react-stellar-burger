import styles from './Loader.module.css';

import { Circles } from "react-loader-spinner";

export const Loader = () => {
	return (
		<>
			<div className={styles.loader}></div>
			<div className={styles.container}>
				<Circles
					height="100"
					width="200"
					radius="5"
					color="blue"
					loading
				/>
			</div>
		</>
	)
}