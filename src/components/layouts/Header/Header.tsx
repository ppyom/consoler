import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.tsx';

const Header = () => {
  return (
    <header className={styles.header}>
      header
      <Navbar />
    </header>
  );
};

export default Header;
