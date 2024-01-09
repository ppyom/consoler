import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import LinkButton from "../components/common/LinkButton";
import routes, { SiteName } from "../routes";

const Home = () => {
	return (
		<PageLayout>
			<div className="py-10 sm:py-20 text-center text-3xl sm:text-5xl font-bold">
				{ SiteName }
			</div>
			<div className="flex flex-col gap-2">
				{
					routes
						.filter((route) => route.showInMenu)
						.map(({ id, displayName, path }) => (
							<LinkButton key={id} className="bg-zinc-100 hover:brightness-90 p-2 rounded-lg drop-shadow" name={displayName} to={path!} />
						))
				}
			</div>
			{/* 최근 저장한 Console 목록 출력!! */}
		</PageLayout>
	);
}

export default Home;