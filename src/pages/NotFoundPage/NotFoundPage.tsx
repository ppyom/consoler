import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>해당 페이지를 찾을 수 없습니다.</p>
      <Link to="/" replace>
        메인으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
