import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { auth } from "../../utils/firebase-config"
import { useStateValue } from "../../utils/state-provider"
import styles from "./styles.module.css"

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
					className={styles.logo}
					src='https://t3.ftcdn.net/jpg/04/35/61/80/360_F_435618063_oCjbhHDAd8qu6NXdLzvMGRIpSbTmaxSE.jpg'
					alt='gna logo'
				/>
			</Link>
			{/* search box */}
			<div className={styles.search}>
				<input type='text' className={styles.search_input} />
				<SearchIcon className={styles.search_icon} />
			</div>
			{/* 3 links */}
			<div className={styles.nav}>
				<Link href='/login'>
					<div onClick={login} className={`${styles.option} ${styles.link}`}>
						<span className={styles.option_line_1}>Hello {user?.email}</span>
						<span className={styles.option_line_2}>{user ? "Sign Out" : "Sign In"}</span>
					</div>
				</Link>
			</div>

			<div className={styles.nav}>
				<Link href='/purchase-history'>
					<div className={`${styles.option} ${styles.link}`}>
						<span className={styles.option_line_1}>Purchase</span>
						<span className={styles.option_line_2}>History</span>
					</div>
				</Link>
			</div>

			<div className={styles.nav}>
				<Link href='/login'>
					<div className={`${styles.option} ${styles.link}`}>
						<span className={styles.option_line_1}>Your</span>
						<span className={styles.option_line_2}>Prime</span>
					</div>
				</Link>
			</div>

			<div className={styles.nav}>
				<Link href='/checkout'>
					<div className={`${styles.option_basket} ${styles.link}`}>
						{/* shopping basket icon */}
						<ShoppingBasketIcon />
						{/* number of items in the basket */}
						{/* we use {basket?.length} href render the length of the basket when basket property of the state reaches the header component. without this, the dom will render the basket.length even when it has not reach the header component therby resulting href an error  */}
						<span className={`${styles.option_line_2} ${styles.basketCount}`}>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
			{/* basket icon with number*/}
		</nav>
	)
}
