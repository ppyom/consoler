import { getConsoleList } from '../../storages/consoleStorage.ts';
import Card from '../../components/commons/Card/Card.tsx';
import Button from '../../components/commons/Button/Button.tsx';
import logo from '../../assets/images/logo-fill.svg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <div className={styles.logo}>
        <img src={`${logo}`} alt="로고 이미지" />
        <h1>Consoler</h1>
      </div>
      <div className={styles.btnGroup}>
        {/* TODO 각 링크로 이동할 수 있어야됨 */}
        <Button.Link to="/edit">Make Console</Button.Link>
        <Button.Link to="/">Console List</Button.Link>
      </div>
      <section className={styles.recentHistory}>
        <h2>최근 작업 내역</h2>
        <div className={styles.list}>
          {Object.values(getConsoleList()).map((consoleItem) => (
            <Card key={`card${consoleItem.id}`} {...consoleItem} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
