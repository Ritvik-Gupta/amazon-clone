import React, { useEffect, useState } from "react"
import { Header } from "../components/header"
import { Product } from "../components/product"
import styles from "../styles/home.module.css"
import { database } from "../utils/firebase-config"

const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		;(async () => {
			const data = await database.collection("products").get()
			setProducts(prevProducts => [
				...prevProducts,
				...data.docs.map(doc => ({ id: doc.id, ...doc.data() })),
			])
		})()
	}, [])

	return (
		<>
			<Header />
			<div className={styles.home}>
				<img className={styles.home__image} src='/banner.jpg' alt='' />

				{/*product id, title, price, rating */}

				<div className={styles.home__row}>
					{products.map(item => {
						return (
							<Product
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Home

