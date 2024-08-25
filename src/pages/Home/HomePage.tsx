import { CardProvider } from '../../context/cardContext.tsx';
import Button from '../../components/commons/Button/Button.tsx';
import CardList from '../../components/commons/CardList/CardList.tsx';
import logo from '../../assets/images/logo-fill.svg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <CardProvider>
      <main className={styles.home}>
        <div className={styles.logo}>
          <img src={`${logo}`} alt="로고 이미지" />
          <h1>Consoler</h1>
        </div>
        <div className={styles.btnGroup}>
          <Button.Link to="/edit">Make Console</Button.Link>
          <Button.Link to="/list">Console List</Button.Link>
        </div>
        <section className={styles.recentHistory}>
          <h2>최근 작업 내역</h2>
          <CardList className={styles.list} />
        </section>
      </main>
    </CardProvider>
  );
};

export default HomePage;
