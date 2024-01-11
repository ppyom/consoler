import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import LinkButton from "../components/common/LinkButton";
import ConsoleList from "../components/ConsoleList/ConsoleList";
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
			<h3 className="text-xl font-bold mt-4">최근 수정 목록</h3>
			<ConsoleList size={8} />
		</PageLayout>
	);
}

export default Home;