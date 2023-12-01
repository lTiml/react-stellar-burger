import styles from './FeedList.module.css';

import clsx from 'clsx';

export const FeedList = ({ heading, numbers, done, columns }) => {
	const list = clsx(styles.list,{
		[styles.columns]: columns
	})

	return (
		<div className={styles.container}>
			<p className='text text_type_main-medium'>{heading}</p>
			<ul className={`${list} custom-scroll`}>
				{numbers.map((num, index) => (
					<li className={done ? styles.number : ''} key={index}>
						<p className='text text_type_main-default'>{num}</p>
					</li>
				))}
			</ul>
		</div>
	)
}