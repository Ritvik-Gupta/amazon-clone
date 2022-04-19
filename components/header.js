import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styles from "../styles/header.module.css"
import { auth } from "../utils/firebase-config"
import { useStateValue } from "../utils/state-provider"

export const Header = () => {
	const [{ basket, user }] = useStateValue()
	const router = useRouter()
	console.log(basket)
	console.log(user)

	const login = () => {
		if (user != null) auth.signOut()
		router.push("/login")
	}

	return (
		<nav className={styles.header}>
			{/* logo on the left -> img */}
			<Link href='/'>
				<img
					className={styles.header__logo}
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='amazon logo'
				/>
			</Link>
			{/* search box */}
			<div className={styles.header__search}>
				<input type='text' className={styles.header__searchInput} />
				<SearchIcon className={styles.header__searchIcon} />
			</div>
			{/* 3 links */}
			<div className={styles.header__nav}>
				<Link href='/login'>
					<div onClick={login} className={`${styles.header__option} ${styles.header__link}`}>
						<span className={styles.header__optionLineOne}>Hello {user?.email}</span>
						<span className={styles.header__optionLineTwo}>{user ? "Sign Out" : "Sign In"}</span>
					</div>
				</Link>
			</div>

			<div className={styles.header__nav}>
				<Link href='/order'>
					<div className={`${styles.header__option} ${styles.header__link}`}>
						<span className={styles.header__optionLineOne}>Returns</span>
						<span className={styles.header__optionLineTwo}>& Orders</span>
					</div>
				</Link>
			</div>

			<div className={styles.header__nav}>
				<Link href='/login'>
					<div className={`${styles.header__option} ${styles.header__link}`}>
						<span className={styles.header__optionLineOne}>Your</span>
						<span className={styles.header__optionLineTwo}>Prime</span>
					</div>
				</Link>
			</div>

			<Link href='/checkout'>
				<div className={`${styles.header__optionBasket} ${styles.header__link}`}>
					{/* shopping basket icon */}
					<ShoppingBasketIcon />
					{/* number of items in the basket */}
					{/* we use {basket?.length} href render the length of the basket when basket property of the state reaches the header component. without this, the dom will render the basket.length even when it has not reach the header component therby resulting href an error  */}
					<span className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}>
						{basket?.length}
					</span>
				</div>
			</Link>
			{/* basket icon with number*/}
		</nav>
	)
}
