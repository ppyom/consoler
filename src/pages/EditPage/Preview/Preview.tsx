import { useConsole } from '../../../context/consoleContext.tsx';
import Line from '../commons/Line/Line.tsx';
import styles from './Preview.module.css';

const Preview = () => {
  const { blocks } = useConsole();
  return (
    <div className={styles.previewContainer}>
      <div className={styles.preview}>
        {blocks.map((line, idx) => (
          <Line
            type="preview"
            key={`preview_line${idx}`}
            line={idx}
            blocks={line}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
