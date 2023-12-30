import styles from './ForgotPasswordPage.module.css';

import { MyInput } from '../../components/form/input/MyInput';
import { Form } from '../../components/form/Form';
import { TextWithLink } from '../../components/form/textWithLink/TextWithLink';
import { LOGIN_PATH } from '../../components/app/router/config/routes';
import { forgotPassword } from '../../utils/api/api';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RESET_PASSWORD } from '../../components/app/router/config/routes';

export const ForgotPasswordPage = () => {
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState('');

	const forgotPasswordOnClick = async (e: React.FormEvent<Element>) => {
		e.preventDefault();
		const res = await forgotPassword(emailValue);
		if (res?.status === 200) {
			navigate(RESET_PASSWORD);
			localStorage.setItem("forgotPasswordVisited", 'true');
		}
	};

	return (
		<div className={styles.container}>
			<Form 
				heading="Восстановление пароля"
				buttonText="Восстановить"
				onSubmit={e => forgotPasswordOnClick(e)}
			>
				<MyInput type="email" input='email' placeholder={"Укажите e-mail"} value={emailValue} setValue={setEmailValue} />
			</Form>
			<TextWithLink text="Вспомнили пароль?" textLink="Войти" path={LOGIN_PATH} />
		</div>
	)
}