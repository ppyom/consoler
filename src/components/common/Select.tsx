import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<'select'> {
	label: string;
	options: string[];
}

const Select = (props: Props) => {
	return (
		<div className="flex flex-col w-fit">
			<label htmlFor={props.id}>{ props.label }</label>
			<select {...props} className={`${props.className} px-1 py-0.5 outline-none bg-transparent hover:bg-zinc-200 focus:bg-zinc-200`}>
				{
					props.options.map((option) => (<option key={option} value={option}>{option}</option>))
				}
			</select>
		</div>
	)
}

export default Select;