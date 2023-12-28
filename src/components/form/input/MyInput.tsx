import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

interface IInputPropTypes {
	value: string
	setValue: (value: string) => void
	placeholder: string
	type: "text" | "email" | "password" | undefined
	input: "text" | "email" | "password" | undefined
}

export const MyInput = ({ value, setValue, placeholder, type, input }: IInputPropTypes) => {
	switch (input) {
		case 'email':
			return (
				<EmailInput
					name={'email'}
					value={value}
					placeholder={placeholder}
					extraClass="mb-2"
					isIcon={true}
					onChange={e => setValue(e.target.value)}
				/>
			);
		case 'password':
			return (
				<PasswordInput
					name={'name'}
					value={value}
					size={'default'}
					// icon={icon}
					placeholder={placeholder}
					extraClass="ml-1"
					onChange={e => setValue(e.target.value)}
				/>
			);
		default:
			return (
				<Input
					name={'name'}
					value={value}
					size={'default'}
					icon="ShowIcon"
					type={type}
					placeholder={placeholder}
					extraClass="ml-1"
					error={false}
					errorText={'Error'}
					onChange={e => setValue(e.target.value)}
				/>
			);
	}
}