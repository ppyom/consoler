import { useState } from "react";
import ConsoleItem from "./ConsoleItem";
import Empty from "../common/Empty";
import storage from "../../api/Storage";

interface Props {
	size?: number;
}

const ConsoleList = ({ size }: Props) => {
	const [items, setItems] = useState(() => storage.getItems());
	const keys = Object.keys(items);
	const handleDeleteItem = (id: string) => {
		storage.deleteItem(id);
		setItems(prev => {
			const obj = {...prev};
			delete obj[id];
			return obj;
		});
	}

	return (
		<div className="mt-2">
			{
				keys.length === 0
					? <Empty />
					: (
						<ul className={`grid ${size && 'sm:grid-cols-2 md:grid-cols-4'} gap-1.5`}>
							{
								keys
									.sort((a, b) => items[b].modifiedTime - items[a].modifiedTime)
									.slice(0, size)
									.map(k => (
										<ConsoleItem key={k} id={k} {...items[k]} type={size ? 'album' : 'list'} deleteItem={handleDeleteItem} />
									))
							}
						</ul>
					)
			}
		</div>
	)
}

export default ConsoleList;