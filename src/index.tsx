import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextApp } from "./app/context";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Pages } from "app/pages";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route component={Pages} path="/" exact={true} />
				<Route component={ContextApp} path="/context" exact={true} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
