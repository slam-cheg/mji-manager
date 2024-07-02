import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Registration } from "./pages/registration/registration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Registration />
	</React.StrictMode>,
);
