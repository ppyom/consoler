import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import ConsoleList from "../components/ConsoleList/ConsoleList";

const ListConsole = () => {
	return (
		<PageLayout>
			<h3 className="text-xl font-bold mt-1">저장된 Console 목록</h3>
			<ConsoleList />
		</PageLayout>
	);
}

export default ListConsole;