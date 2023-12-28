import { MyInput } from "../form/input/MyInput";
import { Form } from "../form/Form";
import { FormEvent, useState } from "react";
import { useDispatch } from "../../services/store/store.types";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/actions/login";

export const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [emailValue, setEmailValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	
	const login = (e: FormEvent) => {
		try {
			e.preventDefault();
			dispatch(loginUser(emailValue, passwordValue, navigate));
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Form heading="Вход" buttonText="Войти" onSubmit={login}>
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
