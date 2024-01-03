import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface Props extends LinkProps {
	name: React.ReactNode;
}

const LinkButton = (props: Props) => {
	return (
		<Link {...props} className={`flex items-center gap-1 max-sm:text-xs ${props.className || ''}`}>
			{ props.name }
		</Link>
	)
}
export default LinkButton;