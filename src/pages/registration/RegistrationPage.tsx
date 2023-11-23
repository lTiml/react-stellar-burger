import styles from './RegistrationPage.module.css';

import { RegistrationForm } from '../../components/registration/RegistrationFrom';
import { LOGIN_PATH } from '../../components/app/router/config/routes';
import { TextWithLink } from '../../components/form/textWithLink/TextWithLink';

export const RegistrationPage =() => {
	return (
		<div className={styles.container}>
			<RegistrationForm />
			<TextWithLink text="Уже зарегистрированы?" textLink="Войти" path={LOGIN_PATH} />
		</div>
	)
}