import Rating from "@material-ui/lab/Rating"
import React from "react"
import { useStateValue } from "../../utils/state-provider"
import styles from "./styles.module.css"

export const Product = ({ id, title, price, rating, image }) => {
	const [{}, dispatch] = useStateValue()
	const addToBasket = () => {
		//Add item to basket...
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		})
	}

	return (
		<div className={styles.product}>
			<div className={styles.info}>
				<p>{title}</p>
				<p className={styles.price}>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className={styles.rating}>
					<Rating readOnly precision={0.5} defaultValue={rating} name='half-rating-read' />
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	)
}
