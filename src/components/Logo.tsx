import { memo } from "react";
import { Link } from "react-router-dom";
import { SiteName } from "../routes";

const Logo = memo(() => {
	return (
		<div className="text-lg font-bold hover:underline">
			<Link to="/">
				{ SiteName }
			</Link>
		</div>
	);
});

export default Logo;