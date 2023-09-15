import styles from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react";
import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modal = document.getElementById("modal");

function Modal(props) {
	const handleCloseModal = useCallback(() => {
		props.onCLose(false);
	}, [props.onClose]);

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				handleCloseModal();
			}
		};
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [handleCloseModal]);

	return ReactDOM.createPortal(
		<ModalOverlay onClose={handleCloseModal}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={`${styles.title} text text_type_main-large pb-3 pt-3`}>{props.title}</h2>
					<div onClick={handleCloseModal} className={styles.closeIcon}>
						<CloseIcon type="primary"/>
					</div>
					{props.children}
				</div>
			</div>
		</ModalOverlay>
		,
		modal
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Modal;