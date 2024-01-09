interface ConsoleBlock {
	id: string;
	text?: string;
	color?: string;
	bgColor?: string;
	fontWeight?: 'normal' | 'bold';
	fontSize?: number;
	fontSizeUnit?: 'px' | 'rem';
}

export { type ConsoleBlock };