import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          @ 2024{' '}
          <a href="https://github.com/ppyom" target="_blank">
            PPYOM
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
