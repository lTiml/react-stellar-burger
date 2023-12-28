import styles from './Profile.module.css';

import { ProfileNav } from '../../components/profile/profileNav/profileNav';
import { ProfileForm } from '../../components/profile/profileForm/profileForm';

export const ProfilePage = () => {
	return (
		<div className={styles.container}>
			<ProfileNav />
			<ProfileForm />
		</div>
	)
}