import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

const MenuBar = () => {
	const { pathname: currentPath } = useLocation();
	return (
		<ul className="flex items-center gap-2 sm:gap-4">
			{
				routes
					.filter((route) => route.showInMenu)
					.map(({ id, displayName, path }) => (
						<li key={id} title={id} className={`border-b-2 ${currentPath === path ? 'border-black' : 'border-transparent'} hover:border-black`}>
							<Link to={path!} className="flex items-center gap-1">
								{displayName}
							</Link>
						</li>
					))
			}
		</ul>
	);
}

export default MenuBar;