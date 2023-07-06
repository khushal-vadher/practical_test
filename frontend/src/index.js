import { Route } from "react-router-dom";
import Home from "./components/Home.js";
import User from "./components/User";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
      <Route path="/"  element={<Home />} />
        <Route path="/user"  element={<User />} />
      </Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);