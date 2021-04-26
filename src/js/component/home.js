import React from "react";
import { UserNavbar } from "../component/navbars.js";
//import { Search } from "../component/search-bar.js";

//import rigoImage from "../../img/rigo-baby.jpg";

export function Home() {
	return (
		<div className="text-center mt-5">
			<UserNavbar />

			<h1>Hello Rigo!</h1>
		</div>
	);
}
