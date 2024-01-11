import type { ConsoleBlock } from "./types";
import { useState } from "react";
import { useBlocksContext } from "../../context/BlocksContext";
import Input from "../common/Input";
import storage from "../../api/Storage";
import {useNavigate} from "react-router-dom";

interface Props {
	id: string;
}

const ConsoleText = ({ id }: Props) => {
	const navigate = useNavigate();
	const { blocks } = useBlocksContext();
	const [title, setTitle] = useState<string>(storage.getTitle(id) || '');
	const makeTextString = () => blocks.map((line) => line.map((item) => `%c${item.text!.replace(/"/g, '\\"').replace(/ /g, '\\ ')}`).join('')).join('\\n');
	const makeStyleString = () => blocks.map((line) => line.map((item) => `"${styleFormatter(item)}"`).join(',')).join(',');
	const styleFormatter = (item: ConsoleBlock) => item ? `${item.color ? `color: ${item.color};` : ''}${item.bgColor ? `background-color: ${item.bgColor};` : ''}${item.fontWeight ? `font-weight: ${item.fontWeight};` : ''}${item.fontSize ? `font-size: ${item.fontSize}${item.fontSizeUnit || 'rem'};` : ''}` : '';
	const consoleText = () => `console.log("${makeTextString()}",${makeStyleString()})`
	const copy = () => {
		const text = consoleText();
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log(text);
			})
		;
	}

	const handleSave = () => {
		storage.saveItem(id, blocks, title);
		navigate(-1);
	}

	return (
		<div className="flex flex-col gap-1">
			<Input className="text-lg font-bold border-2 rounded-full px-5" label="" placeholder="제목 없음" value={title} onChange={({target}) => setTitle(target.value)} />
			<div>{ consoleText() }</div>
			<button className="w-full bg-zinc-100 p-1 rounded-lg hover:bg-zinc-200" onClick={handleSave}>Save</button>
			<button className="w-full bg-zinc-100 p-1 rounded-lg hover:bg-zinc-200" onClick={copy}>Copy</button>
		</div>
	)
}

export default ConsoleText;