import React from "react"
import CurrencyFormat from "react-currency-format"
import styles from "../styles/subtotal.module.css"
import { getBasketTotal } from "../utils"
import { useStateValue } from "../utils/state-provider"

export const Subtotal = () => {
	const [{ basket }, dispatch] = useStateValue()

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

			<button>Proceed to checkout</button>
		</div>
	)
}

export default Subtotal
