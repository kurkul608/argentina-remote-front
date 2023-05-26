import React from "react";
import { App } from "App";
import { Provider } from "react-redux";
import { store } from "redux/store";
import "./shared/i18n";
import * as ReactDOM from "react-dom/client";
import * as dotenv from "dotenv";

dotenv.config();
const rootNode = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

rootNode.render(
	<Provider store={store}>
		<App />
	</Provider>
);
