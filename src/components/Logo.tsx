import {memo} from "react";
import {Link} from "react-router-dom";

const Logo = memo(() => {
	return (
		<div className="text-lg font-bold hover:underline">
			<Link to="/">
				Console Maker
			</Link>
		</div>
	);
});

export default Logo;