import Rating from "@material-ui/lab/rating"
import React from "react"
import { useStateValue } from "../../utils/state-provider"
import styles from "./styles.module.css"

export const CheckoutProduct = ({ id, image, title, price, rating }) => {
	const [{}, dispatch] = useStateValue()
	const removeFromBasket = () => {
		// remove from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		})
	}

	return (
		<div className={styles.checkout_product}>
			<img src={image} alt='' />
			<div className={styles.info}>
				<p className={styles.title}>{title}</p>
				<p className={styles.price}>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<div className={styles.rating}>
					<Rating readOnly precision={0.5} defaultValue={rating} name='half-rating-read' />
				</div>
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	)
}
