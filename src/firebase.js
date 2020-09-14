import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAZdeqZ62ECgkfLBR4ZJJ1Ku5-HR6CYYXY",
	authDomain: "amzn-65993.firebaseapp.com",
	databaseURL: "https://amzn-65993.firebaseio.com",
	projectId: "amzn-65993",
	storageBucket: "amzn-65993.appspot.com",
	messagingSenderId: "344356167294",
	appId: "1:344356167294:web:e2fdfb154d50ab9bf0c22f",
	measurementId: "G-FVMHG04PRG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
