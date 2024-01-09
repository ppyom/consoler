import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

const Input = (props: Props) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={props.id}>{ props.label }</label>
			<input {...props} className={`${props.className} px-1 py-0.5 outline-none bg-transparent ${props.type !== 'color' ? 'border-b-2 border-zinc-400 focus:border-amber-400' : ''}`} />
		</div>
	)
}

export default Input;