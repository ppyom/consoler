import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.tsx';
import logo from '../../../assets/images/logo-fill.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src={`${logo}`} alt="로고" />
          <h1>Consoler</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
