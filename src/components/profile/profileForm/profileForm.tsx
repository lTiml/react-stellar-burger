import styles from './profileForm.module.css';

import { useState, useEffect } from "react";
import { useDispatch } from '../../../services/store/store.types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { MyInput } from '../../form/input/MyInput';
import { LOGIN_PATH } from '../../app/router/config/routes';
import { getUserInfo } from '../../../utils/api/userInfo';
import { changeUserInfoAction } from '../../../services/actions/login';
import { getCookie } from '../../../utils/cookie';

export const ProfileForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [valueEmail, setValueEmail] = useState('');
	const [valuePassword, setValuePassword] = useState('');
	const [valueName, setValueName] = useState('');
	const [Email, setEmail] = useState('');
	const [Name, setName] = useState('');

	useEffect(() => {
		const setValue = async () => {
			try {
				const token = getCookie("accessToken");
				const data = await getUserInfo(String(token));
				setValueEmail(data.user.email);
				setValueName(data.user.name);
				setEmail(data.user.email);
				setName(data.user.name);
			} catch (error) {
					navigate(LOGIN_PATH);
			}
		}
		setValue();
	}, []);

	const changeUserInfoOnClick = () => {
		const form = {
			name: valueName,
			email: valueEmail,
		};
		dispatch(changeUserInfoAction(form));
	};
	const cancelUpdate = async (e: MouseEvent) => {
		e.preventDefault();
		setValueEmail(Email);
		setValueName(Name);
	}

	return (
		<form className={styles.form} onSubmit={changeUserInfoOnClick}>
			<MyInput
				type="text"
				placeholder={"Имя"}
				input={"email"}
				value={valueName}
				setValue={setValueName}
			/>
			<MyInput
				type="email"
				placeholder={"Логин"}
				input={"email"}
				value={valueEmail}
				setValue={setValueEmail}
			/>
			<MyInput
				type="password"
				placeholder={"Пароль"}
				input="password"
				value={valuePassword}
				setValue={setValuePassword}
			/>
			<div className={styles.buttons}>
				<Button type="secondary" htmlType='button' size='medium' onClick={() => cancelUpdate}>Отмена</Button>
				<Button type='primary' htmlType='submit'>Сохранить</Button>
			</div>
		</form>
	)

}
