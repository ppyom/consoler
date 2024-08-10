import styles from './HomePage.module.css';
import logo from '../../assets/images/logo-fill.svg';
import Button from '../../components/commons/Button/Button.tsx';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <div className={styles.logo}>
        <img src={`${logo}`} alt="로고 이미지" />
        <h1>Consoler</h1>
      </div>
      <div className={styles.btnGroup}>
        {/* TODO 각 링크로 이동할 수 있어야됨 */}
        <Button.Link to="/">Make Console</Button.Link>
        <Button.Link to="/">Console List</Button.Link>
      </div>
      <section className={styles.recentHistory}>
        <h2>최근 작업 내역</h2>
        <div className={styles.list}>
          {/* TODO Card 화면에 뿌려주는 부분 처리 */}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
