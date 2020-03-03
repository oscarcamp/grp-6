import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
	apiKey: "AIzaSyASrI3kmBYnulELVmEdMsVXKTUoyQzTJbE",
	authDomain: "quiz-app-48611.firebaseapp.com",
	databaseURL: "https://quiz-app-48611.firebaseio.com",
	projectId: "quiz-app-48611",
	storageBucket: "quiz-app-48611.appspot.com",
	messagingSenderId: "670458506746",
	appId: "1:670458506746:web:ebacedd7060be8a0a28843"
}

// Initialize Firebase
firebase.initializeApp(config)

const db = firebase.firestore()

export { db }