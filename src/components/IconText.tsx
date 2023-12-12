import React from "react";
import {IconType} from "react-icons";

interface Props {
	Icon: IconType;
	text: string;
}

const IconText: React.FC<Props> = ({ Icon, text }) => {
	return (
		<>
			<Icon className="text-xl" />
			<span className="hidden sm:block">{ text }</span>
		</>
	);
}

export default IconText;