import { useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import ConsoleEditor from "../components/ConsoleEditor/ConsoleEditor";

const EditConsole = () => {
	const { id } = useParams();
	return (
		<PageLayout>
			<ConsoleEditor id={id} />
		</PageLayout>
	);
}

export default EditConsole;