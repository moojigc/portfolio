import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/routes";
import * as serviceWorker from "./serviceWorker";
import "./App.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.unregister();
