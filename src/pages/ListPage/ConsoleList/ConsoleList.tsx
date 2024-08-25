import { useSearch } from '../../../context/cardContext.tsx';
import CardList from '../../../components/commons/CardList/CardList.tsx';
import styles from './ConsoleList.module.css';

const ConsoleList = () => {
  const { results } = useSearch();
  return (
    <div className={styles.listContainer}>
      <p className={styles.count}>총 {results.length}개</p>
      <CardList className={styles.list} />
    </div>
  );
};

export default ConsoleList;
