import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}
interface LinkButtonProps
  extends ButtonProps,
    Pick<LinkProps, 'to' | 'replace'> {}

const CommonButton: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
};

const LinkButton: React.FC<LinkButtonProps> = ({ to, replace, ...props }) => {
  return (
    <Link to={to} replace={replace}>
      <CommonButton {...props} />
    </Link>
  );
};

const Button = Object.assign(CommonButton, { Link: LinkButton });

export default Button;
