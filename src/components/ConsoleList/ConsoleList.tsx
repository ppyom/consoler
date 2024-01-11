import { Link } from "react-router-dom";
import storage from "../../api/Storage";
import { toDateTimeString } from "../../util/date";

interface Props {
	size?: number;
}

const ConsoleList = ({ size }: Props) => {
	const items = storage.getItems();
	return (
		<div className="mt-2">
			<ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-1.5">
				{
					Object.keys(items)
						.sort((a, b) => items[b].modifiedTime - items[a].modifiedTime)
						.slice(0, size)
						.map(k => (
							<li key={k} title={ items[k].title }>
								<Link className="flex sm:flex-col items-center justify-between sm:text-center p-2 border-[1px] border-zinc-300 rounded-lg overflow-hidden hover:bg-zinc-200" to={`/edit/${k}`}>
									<div className="flex-1 sm:flex-none max-w-sm w-full text-lg truncate">{ items[k].title }</div>
									<div className="text-sm text-zinc-500">{ toDateTimeString(items[k].modifiedTime) }</div>
								</Link>
							</li>
						))
				}
			</ul>
		</div>
	)
}

export default ConsoleList;