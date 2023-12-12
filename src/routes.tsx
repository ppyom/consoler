import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import {FaPlusSquare} from "react-icons/fa";
import {FaList} from "react-icons/fa6";
import IconText from "./components/IconText";

type RouteType = { displayName?: string | ReactNode, showInMenu?: boolean }

const routes: (RouteObject & RouteType)[]  = [
	{
		id: 'Home',
		path: '/',
		element: <Home />,
		index: true,
	},
	{
		id: 'New',
		displayName: <IconText Icon={FaPlusSquare} text="New Console" />,
		path: '/new',
		element: <></>,
		showInMenu: true,
	},
	{
		id: 'Edit',
		path: '/edit/:id',
		element: <></>,
	},
	{
		id: 'List',
		displayName: <IconText Icon={FaList} text="Console List" />,
		path: '/list',
		element: <></>,
		showInMenu: true,
	}
];

export default routes;