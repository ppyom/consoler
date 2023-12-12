import React from "react";

interface Props {
	children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
	return (
		<main className="w-full h-full flex justify-center">
			<div className="w-full max-w-screen-xl">
				{ children }
			</div>
		</main>
	)
}

export default PageLayout;