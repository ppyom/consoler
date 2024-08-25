import { useConsole } from '../../../context/consoleContext.tsx';
import Line from '../commons/Line/Line.tsx';
import styles from './Viewer.module.css';

const Viewer = () => {
  const { blocks, addLine } = useConsole();
  return (
    <div className={styles.viewer}>
      <div className={styles.blocks}>
        {blocks.map((line, idx) => (
          <Line key={`line${idx}`} line={idx} blocks={line} />
        ))}
        <button onClick={() => addLine()}>+</button>
      </div>
    </div>
  );
};

export default Viewer;
