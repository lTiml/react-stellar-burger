import styles from "./Form.module.css";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, ReactNode } from "react";

interface IFormPropTypes {
	heading: string
	buttonText: string
	onSubmit: (e: FormEvent) => void
	children: ReactNode
}

export const Form = ({ heading, buttonText, onSubmit, children }: IFormPropTypes) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<p className="text text_type_main-medium">{heading}</p>
			{children}
			<Button htmlType="submit" type="primary" size="medium">{buttonText}</Button>
		</form>
	)
}