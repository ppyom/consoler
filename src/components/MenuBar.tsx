import React from "react";
import { useLocation } from "react-router-dom";
import LinkButton from "./common/LinkButton";
import routes from "../routes";

const MenuBar = () => {
	const { pathname: currentPath } = useLocation();
	return (
		<ul className="flex items-center gap-2 sm:gap-4">
			{
				routes
					.filter((route) => route.showInMenu)
					.map(({ id, displayName, path }) => (
						<LinkButton key={id} name={displayName} to={path!} className={`border-b-2 ${currentPath === path ? 'border-black' : 'border-transparent'} hover:border-black`} />
					))
			}
		</ul>
	);
}

export default MenuBar;