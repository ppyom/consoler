import { TbNotesOff } from "react-icons/tb";

const Empty = () => {
	return (
		<div className="box-border w-full min-h-[500px] h-full flex flex-col items-center justify-center gap-2 text-zinc-400">
			<TbNotesOff className="text-9xl" />
			<p className="text-lg">목록이 비어있습니다.</p>
		</div>
	);
}

export default Empty;