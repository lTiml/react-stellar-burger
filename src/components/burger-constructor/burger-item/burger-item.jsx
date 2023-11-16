import styles from "./burger-item.module.css";

import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useRef } from 'react';
import { deleteItem } from "../../../services/actions/constructor";
import { useDrag, useDrop } from "react-dnd";
import { ingredientPropType, selectedIngredientsPropTypes } from "../../../utils/prop-types";
import PropTypes from "prop-types";

export const BurgerItem = ({ moveItem, id, item, index, elseProducts }) => {
	const dispatch = useDispatch();
	const ref = useRef(null);
	const [{handlerId}, drop] = useDrop({
		accept: 'moveItem',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			}
		},
		hover(item, monitor) {
			if (!ref.current) {
				return
			}
			const dragIndex = item.index
			const hoverIndex = index
			if (dragIndex === hoverIndex) {
				return
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const hoverClientY = clientOffset.y - hoverBoundingRect.top
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}
			moveItem(dragIndex, hoverIndex, elseProducts)
			item.index = hoverIndex
		},
	})

	const [{isDragging, cursor}, drag] = useDrag({
		type: "moveItem",
		item: () => {
			return {id, index}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			cursor: monitor.isDragging() ? 'grabbing' : 'grab'
		}),
	})
	const opacity = isDragging ? styles.hidden : styles.visible
	drag(drop(ref))

	return (
		<div className={`${opacity} ${styles.item}`} ref={ref} data-handler-id={handlerId} style={{cursor}}>
			<DragIcon type="primary" />
			<ConstructorElement
				text={item.name}
				price={item.price}
				thumbnail={item.image_mobile}
				handleClose={() => {dispatch(deleteItem(item._id))}}
			/>
		</div>
	);
};

BurgerItem.propTypes = {
	moveItems: PropTypes.func,
	id: PropTypes.string.isRequired,
	item: ingredientPropType,
	index: PropTypes.number,
	elseProducts: selectedIngredientsPropTypes,
};