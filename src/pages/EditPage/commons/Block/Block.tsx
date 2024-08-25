import React from 'react';
import { useConsole } from '../../../../context/consoleContext.tsx';
import type { ConsoleBlock } from '../../../../types/console.ts';
import styles from './Block.module.css';

interface CommonBlockProps extends ConsoleBlock {
  className?: string;
  onClick?: () => void;
}

interface ViewerBlockProps extends ConsoleBlock {
  line: number;
}

const CommonBlock: React.FC<CommonBlockProps> = ({
  onClick = () => {},
  className = '',
  text,
  ...style
}) => {
  return (
    <span
      className={`${styles.block} ${className}`}
      style={{
        color: style.color,
        backgroundColor: style.bgColor,
        fontSize: `${style.fontSize}${style.fontSizeUnit}`,
        fontWeight: `${style.fontWeight}`,
      }}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

const ViewerBlock: React.FC<ViewerBlockProps> = ({ line, id, ...props }) => {
  const { current, setCurrentBlock } = useConsole();
  const handleBlockClick = () => {
    setCurrentBlock(line, id);
  };
  return (
    <CommonBlock
      {...props}
      onClick={handleBlockClick}
      className={`${styles.viewer} ${current?.id === id ? styles.active : ''}`}
    />
  );
};

const Block = Object.assign(CommonBlock, { Viewer: ViewerBlock });

export default Block;
