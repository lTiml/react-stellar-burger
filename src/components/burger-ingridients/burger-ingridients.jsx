import styles from "./burger-ingridients.module.css";

import BurgerCard from "./burger-card/burger-card";
import BurgerSection from "./burger-section/burger-section";
import BurgerTab from "./burger-tab/burger-tab";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import { useState, useMemo } from "react";
import { ingredient } from "../../utils/data";

function BurgerIngredients({ingred}) {
	const buns = useMemo(() => ingred.filter((item) => item.type === ingredient.bun), [ingred]);
	const sauces = useMemo(() => ingred.filter((item) => item.type === ingredient.sauce), [ingred]);
	const main = useMemo(() => ingred.filter((item) => item.type === ingredient.main), [ingred]);

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleOpenModal = item => {
		setSelectedCard(item)
		setModalOpen(true)
	}
	const handleCloseModal = value => {
		setModalOpen(value)
	}

	return (
		<div className={`${styles.container} pt-5`}>
			<BurgerTab />
			<div className={`${styles.containerScroll} custom-scroll`}>

				<BurgerSection title={"Булки"}>
					{buns.map(item => (
						<BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
						img={item.image}
						price={item.price}
						description={item.name}
						count={1}
					/>
					))}
				</BurgerSection>

				<BurgerSection title={"Соусы"}>
					{sauces.map(item => (
						<BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
						img={item.image}
						price={item.price}
						description={item.name}
						count={1}
					/>
					))}
				</BurgerSection>

				<BurgerSection title={"Начинки"}>
					{main.map(item => (
						<BurgerCard key={item._id} onClick={() => handleOpenModal(item)}
						img={item.image}
						price={item.price}
						description={item.name}
						count={1}
					/>
					))}
				</BurgerSection>

			</div>

			{modalOpen && <Modal title="Дул=тали игридиента" onClose={handleCloseModal}>
				<IngredientDetails data={selectedCard}></IngredientDetails>
				</Modal>}

		</div>
	);
};

BurgerIngredients.propTypes = {
	ingred: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_mobile: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			__v: PropTypes.number.isRequired,
		})
	)
};

export default BurgerIngredients;