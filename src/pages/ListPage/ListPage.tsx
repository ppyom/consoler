import { CardProvider } from '../../context/cardContext.tsx';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import SearchForm from './SearchForm/SearchForm.tsx';
import ConsoleList from './ConsoleList/ConsoleList.tsx';
import styles from './ListPage.module.css';

const ListPage = () => {
  return (
    <CardProvider>
      <PageLayout className={styles.list}>
        <h2>Console 목록</h2>
        <SearchForm />
        <ConsoleList />
      </PageLayout>
    </CardProvider>
  );
};

export default ListPage;
