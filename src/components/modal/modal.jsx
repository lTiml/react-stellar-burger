import styles from "./modal.module.css";

import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modal = document.getElementById("modal");

const Modal = ({ onClose, title, children }) => {
	const handleCloseModal = useCallback(() => {
		onClose();
	}, [onClose]);

	useEffect(() => {
		const handleEscape = event => {
			if (event.key === "Escape") {
				handleCloseModal();
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [handleCloseModal]);

	return ReactDOM.createPortal(
		<div className={styles.container}>
			<div className={styles.content}>
				<h2 className={`${styles.title} text text_type_main-large pb-3 pt-3`}>{title}</h2>
				<div onClick={handleCloseModal} className={styles.closeIcon}>
					<CloseIcon type="primary" />
				</div>
				{children}
			</div>
			<ModalOverlay onClose={handleCloseModal}></ModalOverlay>
		</div>,
		modal
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	onClose: PropTypes.func.isRequired,
	title: PropTypes.string
};

export default Modal;