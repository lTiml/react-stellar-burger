import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

export const MyInput = ({ value, setValue, icon, placeholder, type, input }) => {
	switch (input) {
		case 'email':
			return (
				<EmailInput
					name={'email'}
					value={value}
					placeholder={placeholder}
					extraClass="mb-2"
					isIcon={true}
					error={false}
					onChange={e => setValue(e.target.value)}
				/>
			);
		case 'password':
			return (
				<PasswordInput
					name={'name'}
					value={value}
					size={'default'}
					icon={icon}
					placeholder={placeholder}
					extraClass="ml-1"
					error={false}
					onChange={e => setValue(e.target.value)}
				/>
			);
		default:
			return (
				<Input
					name={'name'}
					value={value}
					size={'default'}
					icon={icon}
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