import styles from './ResetPasswordPage.module.css';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { LOGIN_PATH } from '../../components/app/router/config/routes';
import { MyInput } from '../../components/form/input/MyInput';
import { TextWithLink } from '../../components/form/textWithLink/TextWithLink';
import { Form } from '../../components/form/Form';
import { resetPassword } from '../../utils/api/api';

export const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const [passwordValue, setPasswordValue] = useState("");
	const [codeValue, setCodeValue] = useState("");

	const resetPasswodOnClick = async (e: React.FormEvent) => {
		e.preventDefault();
		const res = await resetPassword(passwordValue, codeValue);
		if (res?.status === 200) {
			navigate(LOGIN_PATH);
		}
	};

	useEffect(() => {
		const forgotPasswordVisited = localStorage.getItem("forgotPasswordVisited");
		if (!forgotPasswordVisited || forgotPasswordVisited === 'false') {
			navigate(LOGIN_PATH);
		}
		return () => {
			localStorage.removeItem("forgotPasswordVisited");
		}
	}, []);

	return (
		<div className={styles.container}>
			<Form
				heading="Восстановление пароля"
				buttonText="Войти"
				onSubmit={e => resetPasswodOnClick(e)}
			>
				<MyInput
					type='password'
					input="password"
					placeholder={"Введите новый пароль"}
					value={passwordValue}
					setValue={setPasswordValue}
				/>
				<MyInput
					type='text'
					input="text"
					placeholder={"Введите код из письма"}
					value={codeValue}
					setValue={setCodeValue}
				/>
			</Form>
			<TextWithLink
				text="Вспомнили пароль?"
				textLink="Войти"
				path={LOGIN_PATH}
			/>
		</div>
	)
}