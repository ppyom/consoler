import React from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import styles from './Select.module.css';

interface SelectProps extends Omit<ReactSelectProps, ''> {
  labelText?: string;
}

const Select: React.FC<SelectProps> = ({
  labelText = '',
  options,
  ...props
}) => {
  return (
    <div className={styles.selectContainer}>
      {labelText && <label>{labelText}</label>}
      <ReactSelect
        defaultValue={options && options[0]}
        classNames={{
          container: () => styles.select,
          control: (state) => {
            const defaultClass = styles.control;
            return `${defaultClass} ${state.isFocused ? styles.focused : ''}`;
          },
          option: (state) => {
            const defaultClass = styles.option;
            return `${defaultClass} ${state.isFocused ? styles.focused : ''}  ${state.isSelected ? styles.selected : ''}`;
          },
        }}
        options={options}
        {...props}
      />
    </div>
  );
};

export default Select;
