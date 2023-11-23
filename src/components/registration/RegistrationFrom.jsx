import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyInput } from "../form/input/MyInput";
import { Form } from "../form/Form";
import { LOGIN_PATH } from "../app/router/config/routes";
import { useSelector, useDispatch } from "react-redux";

export const RegistrationForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const register = async e => {
		e.preventDefault();
		navigate(LOGIN_PATH);
	}

	return (
		<Form
			title="Регистрация"
			buttonText="Зарегистрироваться"
			onSubmit={register}
		>
			<MyInput
				type="text"
				placeholder={"Имя"}
				value={nameValue}
				setValue={setNameValue}
			/>
			<MyInput
				type="email"
				placeholder={"E-mail"}
				value={emailValue}
				setValue={setEmailValue}
			/>
			<MyInput
				type="password"
				placeholder={"Пароль"}
				value={passwordValue}
				setValue={setPasswordValue}
				icon={"ProfileIcon"}
			/>
		</Form>
	)
}