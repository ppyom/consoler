import { FaMinus, FaPlus } from "react-icons/fa6";
import { useBlocksContext } from "../../context/BlocksContext";
import Block from "./Block";

const Viewer = () => {
	const { blocks, current: selected, selectBlock, addBlock, deleteRow } = useBlocksContext();
	return (
		<pre className="w-full h-[50vh] overflow-auto">
			<ul>
				{
					blocks.map((row, idx) => {
						return (
							<li key={idx}>
								<ul className="flex">
									{
										row.map((block) => (
											<Block key={block.id} {...block} selected={selected === block.id} handleSelectBlock={selectBlock} />
										))
									}
									<button className="self-stretch flex items-center p-1 bg-sky-500" onClick={() => addBlock('block', idx)}>
										<FaPlus />
									</button>
									<button className="self-stretch flex items-center p-1 bg-rose-500" onClick={() => deleteRow(idx)}>
										<FaMinus />
									</button>
								</ul>
							</li>
						);
					})
				}
				<button className="w-full flex justify-center p-1 bg-zinc-400" onClick={() => addBlock('line')}>
					<FaPlus />
				</button>
			</ul>
		</pre>
	);
}

export default Viewer;