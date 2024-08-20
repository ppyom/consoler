import React from 'react';
import { useConsole } from '../../../../context/consoleContext.tsx';
import type { ConsoleBlock } from '../../../../types/console.ts';
import styles from '../Viewer.module.css';

interface BlockProps extends ConsoleBlock {
  line: number;
}

const Block: React.FC<BlockProps> = ({ line, id, text = '', ...style }) => {
  const { current, setCurrentBlock } = useConsole();
  const handleBlockClick = () => {
    setCurrentBlock(line, id);
  };
  return (
    <span
      className={`${styles.block} ${current?.id === id ? styles.active : ''}`}
      style={{
        color: style.color,
        backgroundColor: style.bgColor,
        fontSize: `${style.fontSize}${style.fontSizeUnit}`,
        fontWeight: `${style.fontWeight}`,
      }}
      onClick={handleBlockClick}
    >
      {text}
    </span>
  );
};

export default Block;
