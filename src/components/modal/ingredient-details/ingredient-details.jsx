import styles from "./ingredient-details.module.css";

import InfoItem from "./info-item/info-item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectIngredientById } from "../../../services/selectors/selectors";

const IngredientDetails = () => {
	const { id } = useParams();
	const data = useSelector(selectIngredientById(id));
	if (!data) return null;

	return (
		<div className={styles.container}>
			<img src={data.image_large} alt={data.name}></img>
			<p className="text text_type_main-medium pb-4 pt-4">{data.name}</p>
			<div className={`${styles.info} pt-4`}>
				<InfoItem text="Калории,ккал" info={data.calories}></InfoItem>
				<InfoItem text="Белки, г" info={data.proteins}></InfoItem>
				<InfoItem text="Жиры, г" info={data.fat}></InfoItem>
				<InfoItem text="Углеводы, г" info={data.carbohydrates}></InfoItem>
			</div>
		</div>
	);
};

export default IngredientDetails;