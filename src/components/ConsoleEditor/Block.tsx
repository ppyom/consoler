import type { ConsoleBlock } from "./types";

interface BlockProps extends ConsoleBlock {
	id: string;
	selected: boolean;
	handleSelectBlock: (id: string) => void;
}

const Block = ({ id, text, color = '#000000', bgColor = '#FFFFFF', fontWeight = 'normal', fontSize = 1, fontSizeUnit = 'rem', selected, handleSelectBlock }: BlockProps) => {
	return (
		<li
			onClick={() => handleSelectBlock(id)}
			className={`self-baseline leading-snug ${selected ? `ring-4 ring-blue-500 ring-inset ${text || 'border-4 border-blue-500'}` : ''} ${text || 'w-1'}`}
			style={{ color, backgroundColor: bgColor, fontSize: `${fontSize}${fontSizeUnit}`, fontWeight }}
		>
			{ text || ' ' }
		</li>
	);
}

export default Block;