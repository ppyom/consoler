import { ChangeEvent } from "react";
import { useBlocksContext } from "../../context/BlocksContext";
import Input from "../common/Input";
import Select from "../common/Select";
import Checkbox from "../common/Checkbox";

const Editor = () => {
	const { currentBlock, updateBlock, deleteBlock } = useBlocksContext();
	const block = currentBlock;
	if(!block) {
		return <></>
	}
	const { id, text, color = '#000000', bgColor = 'transparent', fontWeight = 'normal', fontSize = 0.75, fontSizeUnit = 'rem' } = block;
	const handleChange = <T extends HTMLInputElement | HTMLSelectElement>(event: ChangeEvent<T>) => {
		const { target } = event;
		const changed = { ...block, [target.name]: target.value };
		updateBlock(changed);
	}
	const handleTransparent = (event: ChangeEvent<HTMLInputElement>) => {
		const { target } = event;
		if(target.checked) {
			updateBlock({ ...block, bgColor: 'transparent' });
		} else {
			updateBlock({ ...block, bgColor: '#ffffff' });
		}
	}
	return (
		<div className="bg-zinc-50 p-1.5">
			<Input label="Text" id="text" name="text" type="text" value={text} onChange={handleChange} />
			<Input label="Color" id="color" name="color" type="color" value={color} onChange={handleChange} />
			<div className="flex flex-col">
				<div>
					<p>Background Color</p>
					<Checkbox label="투명" id="isTransparent" checked={bgColor === 'transparent'} onChange={handleTransparent} />
				</div>
				{ bgColor !== 'transparent' && <Input label="" id="bgColor" name="bgColor" type="color" value={bgColor} onChange={handleChange} /> }
			</div>
			<div className="flex items-end">
				<Input label="Font Size" id="fontSize" name="fontSize" type="number" min={0.5} value={fontSize} onChange={handleChange} />
				<Select label="" id="fontSizeUnit" name="fontSizeUnit" value={fontSizeUnit} options={['px', 'rem']} onChange={handleChange} />
			</div>
			<Select label="Font Weight" id="fontWeight" name="fontWeight" value={fontWeight} options={['normal', 'bold']} onChange={handleChange} />
			<button className="bg-rose-300 w-full mt-2 rounded p-0.5" onClick={() => deleteBlock(id)}>delete</button>
		</div>
	);
}

export default Editor;