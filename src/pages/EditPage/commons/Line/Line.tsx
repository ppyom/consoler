import React from 'react';
import { useConsole } from '../../../../context/consoleContext.tsx';
import Block from '../Block/Block.tsx';
import type { ConsoleBlock } from '../../../../types/console.ts';
import styles from './Line.module.css';

interface LineProps {
  type?: 'viewer' | 'preview';
  line: number;
  blocks: ConsoleBlock[];
}

const Line: React.FC<LineProps> = ({ line, blocks, type = 'viewer' }) => {
  const BlockComponent = type === 'viewer' ? Block.Viewer : Block;
  const { addBlock } = useConsole();
  return (
    <div className={styles.line}>
      {blocks.map((block) => (
        <BlockComponent
          key={`${type}_block${block.id}`}
          line={line}
          {...block}
        />
      ))}
      {type === 'viewer' && <button onClick={() => addBlock(line)}>+</button>}
    </div>
  );
};

export default Line;
