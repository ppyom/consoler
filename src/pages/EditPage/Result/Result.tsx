import { useState } from 'react';
import Button from '../../../components/commons/Button/Button.tsx';
import Preview from '../Preview/Preview.tsx';
import Code from '../Code/Code.tsx';
import styles from './Result.module.css';

const Result = () => {
  const [tab, setTab] = useState<'Preview' | 'Code'>('Preview');
  return (
    <div className={styles.resultContainer}>
      <Button
        className={`${styles.tabBtn} ${tab === 'Preview' ? styles.active : ''}`}
        onClick={() => setTab('Preview')}
      >
        Preview
      </Button>
      <Button
        className={`${styles.tabBtn} ${tab === 'Code' ? styles.active : ''}`}
        onClick={() => setTab('Code')}
      >
        Code
      </Button>
      <div className={styles.result}>
        {tab === 'Preview' ? <Preview /> : <Code />}
      </div>
    </div>
  );
};

export default Result;
