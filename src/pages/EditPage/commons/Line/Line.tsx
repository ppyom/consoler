import React from 'react';
import { useConsole } from '../../../../context/consoleContext.tsx';
import Block from '../Block/Block.tsx';
import type { ConsoleBlock } from '../../../../types/console.ts';
import styles from './Line.module.css';

interface LineProps {
  line: number;
  blocks: ConsoleBlock[];
}

const Line: React.FC<LineProps> = ({ line, blocks }) => {
  const { addBlock } = useConsole();
  return (
    <div className={styles.line}>
      {blocks.map((block) => (
        <Block key={`block${block.id}`} line={line} {...block} />
      ))}
      <button onClick={() => addBlock(line)}>+</button>
    </div>
  );
};

export default Line;
