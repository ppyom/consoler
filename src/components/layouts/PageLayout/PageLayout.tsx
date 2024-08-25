import React from 'react';
import styles from './PageLayout.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<Props> = ({ children, className }) => {
  return <main className={`${styles.layout} ${className}`}>{children}</main>;
};

export default PageLayout;
