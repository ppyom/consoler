import React from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import styles from './Select.module.css';

type Option<T> = T;

interface SelectProps<T>
  extends Omit<ReactSelectProps, 'options' | 'onChange'> {
  labelText?: string;
  options: Option<T>[];
  onChange: (option: Option<T>) => void;
}

const Select = <T extends string>({
  labelText = '',
  options,
  onChange,
  ...props
}: SelectProps<T>): React.ReactNode => {
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
        options={options.map((option) => ({ value: option, label: option }))}
        onChange={(changeValue) => {
          onChange(changeValue.value);
        }}
        {...props}
      />
    </div>
  );
};

export default Select;
