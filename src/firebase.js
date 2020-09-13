import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAkn1a3MAlWvUHloEQrQY5eI49BdM-m1sE",
	authDomain: "clone-13404.firebaseapp.com",
	databaseURL: "https://clone-13404.firebaseio.com",
	projectId: "clone-13404",
	storageBucket: "clone-13404.appspot.com",
	messagingSenderId: "602691263797",
	appId: "1:602691263797:web:95a293e9660a3b285a407c",
	measurementId: "G-RBYE6SFDQ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
