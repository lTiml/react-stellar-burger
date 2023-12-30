import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyInput } from "../form/input/MyInput";
import { Form } from "../form/Form";
import { registerUser } from "../../services/actions/register";
import { LOGIN_PATH } from "../app/router/config/routes";
import { useDispatch } from "../../services/store/store.types";

export const RegistrationForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState('');
	const [nameValue, setNameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');

	const register = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(registerUser(emailValue, passwordValue, nameValue));
		navigate(LOGIN_PATH);
	}

	return (
		<Form
			heading="Регистрация"
			buttonText="Зарегистрироваться"
			onSubmit={register}
		>
			<MyInput
				type="text"
				input="text"
				placeholder={"Имя"}
				value={nameValue}
				setValue={setNameValue}
			/>
			<MyInput
				type="email"
				input="email"
				placeholder={"E-mail"}
				value={emailValue}
				setValue={setEmailValue}
			/>
			<MyInput
				type="password"
				input="password"
				placeholder={"Пароль"}
				value={passwordValue}
				setValue={setPasswordValue}
			/>
		</Form>
	)
}