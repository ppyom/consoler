import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.tsx';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="/src/assets/images/logo-fill.svg" alt="로고" />
          <h1>Consoler</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
