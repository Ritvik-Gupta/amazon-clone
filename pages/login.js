import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/login.module.css"
import { auth } from "../utils/firebase-config"

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
					src='https://t3.ftcdn.net/jpg/04/35/61/80/360_F_435618063_oCjbhHDAd8qu6NXdLzvMGRIpSbTmaxSE.jpg'
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
						by signing in you agree to GNA condition of use and sale.Please see our privacy notice,
						our cookies notice and our interest based ad notice.
					</p>
					<button onClick={register} className={styles.registerBtn}>
						create your GNA account
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
