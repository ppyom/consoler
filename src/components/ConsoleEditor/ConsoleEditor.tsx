import { BlocksProvider } from "../../context/BlocksContext";
import Editor from "./Editor";
import Viewer from "./Viewer";
import ConsoleText from "./ConsoleText";

const ConsoleEditor = () => {
	return (
		<BlocksProvider>
			<div className="flex flex-col md:flex-row">
				<Viewer />
				<Editor />
			</div>
			<ConsoleText />
		</BlocksProvider>
	);
}

export default ConsoleEditor;