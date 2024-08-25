import styles from './ConsoleList.module.css';
import { useSearch } from '../../../context/searchContext.tsx';
import Card from '../../../components/commons/Card/Card.tsx';

const ConsoleList = () => {
  const { results } = useSearch();
  return (
    <div className={styles.listContainer}>
      <p className={styles.count}>총 {results.length}개</p>
      <div className={styles.list}>
        {results.map((item) => (
          <Card key={`console${item.id}`} {...item} line />
        ))}
      </div>
    </div>
  );
};

export default ConsoleList;
