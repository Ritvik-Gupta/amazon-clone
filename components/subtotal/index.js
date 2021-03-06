import React from "react"
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from "../../utils"
import { database } from "../../utils/firebase-config"
import { useStateValue } from "../../utils/state-provider"
import styles from "./styles.module.css"

export const Subtotal = () => {
	const [{ user, basket }, dispatch] = useStateValue()

	const checkoutBasketProducts = async () => {
		if (user === null) return

		await database
			.collection("purchase-history")
			.doc(user.uid)
			.set({
				date: Date.now(),
				totalItems: basket.length,
				moneySpent: getBasketTotal(basket),
			})

		dispatch({ type: "RESET_BASKET" })
	}

	return (
		<div className={styles.subtotal}>
			{/* price */}

			<CurrencyFormat
				renderText={value => (
					<>
						<p>
							( Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
						</p>
						<small className={styles.subtotal__gift}>
							<input type='checkbox' /> This order contains
						</small>
					</>
				)}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button onClick={checkoutBasketProducts}>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
