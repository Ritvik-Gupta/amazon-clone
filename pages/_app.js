import React, { useEffect } from "react"
import { TransitionLayout } from "../components/transition-layout"
import "../styles/globals.css"
import { auth } from "../utils/firebase-config"
import { initialState, reducer } from "../utils/reducer"
import { StateProvider, useStateValue } from "../utils/state-provider"

const MyApp = ({ Component, pageProps }) => {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<MyComponent Component={Component} pageProps={pageProps} />
		</StateProvider>
	)
}

const MyComponent = ({ Component, pageProps }) => {
	const [{ user }, dispatch] = useStateValue()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				//The user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				})
			} else {
				//The user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				})
			}
		})

		return () => {
			// Any clean up operation goes in here
			unsubscribe()
		}
	}, [])

	return (
		<TransitionLayout>
			<Component {...pageProps} />
		</TransitionLayout>
	)
}

export default MyApp

