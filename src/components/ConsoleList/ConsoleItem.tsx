import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { toDateTimeString } from "../../util/date";

interface Props {
	id: string;
	title: string;
	modifiedTime: number;
	type: 'list' | 'album';
	deleteItem: (id: string) => void;
}

const ConsoleItem = ({ id, title, modifiedTime, type, deleteItem }: Props) => {
	return (
		<li className={`flex items-center gap-2 p-2 border-[1px] border-zinc-300 rounded-lg overflow-hidden hover:bg-zinc-200`}>
			<Link className={`flex-1 flex items-center justify-between w-full ${type === 'album' && 'sm:flex-col sm:text-center'}`} title={ title } to={`/edit/${id}`}>
				<div className={`flex-1 ${type === 'album' && 'sm:flex-none'} max-w-sm w-full text-lg truncate`}>{ title }</div>
				<div className="text-sm text-zinc-500">{ toDateTimeString(modifiedTime) }</div>
			</Link>
			{
				type === 'list' && (
					<button className="group" onClick={() => deleteItem(id)}>
						<FaTrash className="group-hover:text-red-500 group-hover:rotate-45" />
					</button>
				)
			}
		</li>
	);
}

export default ConsoleItem;