import { ComponentPropsWithoutRef } from "react";

interface Props extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
	label: string;
}

const Checkbox = (props: Props) => {
	return (
		<div className="flex items-center gap-1">
			<input type="checkbox" {...props} className={`${props.className} px-1 py-0.5 outline-none bg-transparent`} />
			<label htmlFor={props.id}>{ props.label }</label>
		</div>
	);
}

export default Checkbox;