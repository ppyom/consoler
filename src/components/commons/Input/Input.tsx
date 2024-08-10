import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  labelText?: string;
}

const Input: React.FC<InputProps> = ({ labelText = '', ...props }) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      {labelText && <label htmlFor={props.id}>{labelText}</label>}
      <input {...props} placeholder={props.placeholder || ' '} />
    </div>
  );
};

export default Input;
