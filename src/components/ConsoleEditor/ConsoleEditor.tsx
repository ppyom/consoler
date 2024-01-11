import { BlocksProvider } from "../../context/BlocksContext";
import Editor from "./Editor";
import Viewer from "./Viewer";
import ConsoleText from "./ConsoleText";

interface Props {
	id?: string;
}

const ConsoleEditor = ({ id }: Props) => {
	let consoleId = id || new Date().getTime().toString();

	return (
		<BlocksProvider id={consoleId}>
			<div className="flex flex-col md:flex-row">
				<Viewer />
				<Editor />
			</div>
			<ConsoleText id={consoleId} />
		</BlocksProvider>
	);
}

export default ConsoleEditor;