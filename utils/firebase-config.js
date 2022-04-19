import firebase from "firebase"

export const app =
	firebase.apps.length == 0
		? firebase.initializeApp({
				apiKey: "AIzaSyDvBZ9lHL7dRsEleYN1rGyQ07HIQfy2b1Y",
				authDomain: "ecommerce-2e021.firebaseapp.com",
				databaseURL: "https://ecommerce-2e021-default-rtdb.firebaseio.com",
				projectId: "ecommerce-2e021",
				storageBucket: "ecommerce-2e021.appspot.com",
				messagingSenderId: "88615837243",
				appId: "1:88615837243:web:e8bae64cfdd8aa7087c61e",
				measurementId: "G-MHXR649M7F",
		  })
		: firebase.apps[0]

export const database = app.firestore()
export const auth = firebase.auth()
