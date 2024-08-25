import type { CardType } from './card.ts';

interface ConsoleBlock {
  id: string;
  text?: string;
  color?: string;
  bgColor?: string;
  fontWeight?: 'normal' | 'bold';
  fontSize?: number;
  fontSizeUnit?: 'px' | 'rem';
}

interface ConsoleType extends CardType {
  console: ConsoleBlock[][];
}

export type { ConsoleType, ConsoleBlock };
