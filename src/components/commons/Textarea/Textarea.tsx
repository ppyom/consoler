import React from 'react';
import styles from './Textarea.module.css';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  labelText?: string;
}

const Textarea: React.FC<TextareaProps> = ({ labelText, ...props }) => {
  return (
    <div className={`${styles.textarea} ${props.className}`}>
      {labelText && <label htmlFor={props.id}>{labelText}</label>}
      <textarea {...props} placeholder={props.placeholder || ' '} />
    </div>
  );
};

export default Textarea;
