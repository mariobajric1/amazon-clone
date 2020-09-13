import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("theuseris   ::: ", authUser);
			if (authUser) {
				//user logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
				//logged out
			}
		});
	}, []);
	return (
		//BEM
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="/checkout">
						<Header />

						<Checkout />
					</Route>

					<Route path="/">
						<Header />

						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

//Default Route must be @ bottom

export default App;
