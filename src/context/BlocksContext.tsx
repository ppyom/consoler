import React, { createContext, useContext, useMemo, useState } from "react";
import { ConsoleBlock } from "../components/ConsoleEditor/types";

type BlocksType = ConsoleBlock[][];

interface ContextProps {
	current: string | undefined;
	blocks: ConsoleBlock[][];
	selectBlock: (id: string) => void;
	addBlock: (type: 'block' | 'line', line?: number) => void;
	updateBlock: (block: ConsoleBlock) => void;
	deleteBlock: (id: string) => void;
	deleteRow: (row: number) => void;
	currentBlock: ConsoleBlock | undefined;
}

const BlocksContext = createContext<ContextProps>({
	current: undefined,
	blocks: [[]],
	selectBlock: () => {},
	addBlock: () => {},
	updateBlock: () => {},
	deleteBlock: () => {},
	deleteRow: () => {},
	currentBlock: undefined,
});

const BlocksProvider = ({ children }: { children: React.ReactNode }) => {
	const [current, setCurrent] = useState<string | undefined>(undefined);
	const [blocks, setBlocks] = useState<BlocksType>([[]]);
	const addBlock = (type: 'block' | 'line', line?: number) => {
		const newBlock: ConsoleBlock = {
			id: new Date().getTime().toString(),
			text: '',
			fontSize: 1,
			fontSizeUnit: 'rem',
			fontWeight: 'normal',
			bgColor: 'transparent',
			color: '#000000'
		};

		if(type === 'line') {
			setBlocks(prev => ([...prev, [ newBlock ]]));
		} else {
			setBlocks(prev => (
				prev.map((r, ri) => {
					if(ri === line) {
						return [...r, newBlock];
					} else {
						return r;
					}
				})
			));
		}
		setCurrent(newBlock.id);
	}
	const updateBlock = (block: ConsoleBlock) => {
		setBlocks((prev) => {
			return prev.map((r) => {
				const find = r.find((b) => b.id === current);
				if(!!find) {
					return r.map((b) => {
						if(b.id === current) {
							return block;
						} else {
							return b;
						}
					});
				} else {
					return r;
				}
			});
		});
	};
	const deleteBlock = (id: string) => {
		setBlocks((prev) => {
			return prev.map((r) => {
				return r.filter(block => block.id !== id);
			});
		});
		setCurrent(undefined);
	}
	const deleteRow = (row: number) => {
		setBlocks((prev) => {
			return prev.slice(0, row).concat(prev.slice(row + 1));
		});
		setCurrent(undefined);
	}

	const selectBlock = (id: string) => {
		setCurrent(id);
	}
	const currentBlock = useMemo(() => blocks.flat().find((b) => b.id === current), [blocks, current]);
	return (
		<BlocksContext.Provider value={{
			current,
			blocks,
			selectBlock,
			addBlock,
			updateBlock,
			deleteBlock,
			deleteRow,
			currentBlock,
		}}>
			{ children }
		</BlocksContext.Provider>
	)
}

const useBlocksContext = () => useContext(BlocksContext);

export { BlocksProvider, useBlocksContext };