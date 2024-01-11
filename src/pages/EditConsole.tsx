import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import ConsoleEditor from "../components/ConsoleEditor/ConsoleEditor";
import storage from "../api/Storage";
import {useEffect} from "react";

const EditConsole = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		if(!storage.getTitle(id!)) {
			navigate('/', { replace: true });
		}
	});

	return (
		<PageLayout>
			<ConsoleEditor id={id} />
		</PageLayout>
	);
}

export default EditConsole;