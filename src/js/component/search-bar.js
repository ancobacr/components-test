import React from "react";

export function Search() {
	return (
		<div className="input-group">
			<div className="form-outline">
				<input className="form-control mr-sm-2" type="search" placeholder="Búsqueda" aria-label="Search"></input>
			</div>
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
				<i className="fas fa-search"></i>
			</button>
		</div>
	);
}
