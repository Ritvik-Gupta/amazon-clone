import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/login.module.css"
import { auth } from "../utils/firebase-config"

const a = styles

const Login = () => {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const signIn = event => {
		event.preventDefault()

		auth
			.signInWithEmailAndPassword(email, password)
			.then(auth => {
				//redirect to home page
				router.push("/")
			})
			.catch(err => {
				alert(err.message)
			})
	}

	const register = event => {
		event.preventDefault()

		auth
			.createUserWithEmailAndPassword(email, password)
			.then(auth => {
				//create a user, login and redirect to homepage
				router.push("/")
			})
			.catch(err => {
				alert(err.message)
			})
	}
	return (
		<div className={styles.login}>
			<Link href='/'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt=''
					className={styles.logo}
				/>
			</Link>
			<div className={styles.container}>
				<h1>Sign in</h1>
				<form>
					<h5>Email:</h5>
					<input value={email} onChange={event => setEmail(event.target.value)} type='email' />

					<h5>Password:</h5>
					<input
						value={password}
						onChange={event => setPassword(event.target.value)}
						type='password'
					/>

					<button type='submit' onClick={signIn} className={styles.signInBtn}>
						sign in
					</button>
					<p>
						by signing in you agree to amazon condition of use and sale.Please see our privacy
						notice, our cookies notice and our interest based ad notice.
					</p>
					<button onClick={register} className={styles.registerBtn}>
						create your amazon account
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
