import styles from "./ingredient-details.module.css";

import InfoItem from "./info-item/info-item";
import { useSelector } from "../../../services/store/store.types";
import { useParams } from "react-router-dom";

const IngredientDetails = () => {
	const { id } = useParams();
	const data = useSelector(store => store.ingredientsReducer.allIngredients.find(
		ingredients => ingredients._id === id
	));
	if (!data) return null;

	return (
		<div className={styles.container}>
			<img src={data.image_large} alt={data.name}></img>
			<p className="text text_type_main-medium pb-4 pt-4">{data.name}</p>
			<div className={`${styles.info} pt-4`}>
				{data.calories && <InfoItem text="Калории,ккал" info={data.calories}></InfoItem>}
				{data.proteins && <InfoItem text="Белки, г" info={data.proteins}></InfoItem>}
				{data.fat && <InfoItem text="Жиры, г" info={data.fat}></InfoItem>}
				{data.carbohydrates && <InfoItem text="Углеводы, г" info={data.carbohydrates}></InfoItem>}
			</div>
		</div>
	);
};

export default IngredientDetails;