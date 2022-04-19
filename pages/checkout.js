import React from "react"
import { CheckoutProduct } from "../components/checkout-product"
import { Subtotal } from "../components/subtotal"
import styles from "../styles/checkout.module.css"
import { useStateValue } from "../utils/state-provider"

const Checkout = () => {
	const [{ basket }] = useStateValue()

	return (
		<div className={styles.checkout}>
			<div className={styles.checkout__left}>
				{basket?.length === 0 ? (
					<div>
						<h2>Your shopping basket is empty</h2>
						<p>
							You have no items in your basket. To buy one or add item to basket click the add to
							basket button
						</p>
					</div>
				) : (
					<div>
						<h2 className={styles.checkout__title}>Your shopping basket</h2>
						{basket.map(item => {
							console.log(item)
							return (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							)
						})}
					</div>
				)}
			</div>
			{basket?.length > 0 && (
				<div className={styles.checkout__right}>
					<Subtotal />
				</div>
			)}
		</div>
	)
}

export default Checkout
