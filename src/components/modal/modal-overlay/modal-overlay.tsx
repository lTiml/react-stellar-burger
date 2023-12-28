import styles from "./modal-overlay.module.css";

type TOverplayProps = {
	onClose: () => void
}

function ModalOverlay({ onClose }: TOverplayProps) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			
		</div>
	);
};

export default ModalOverlay;