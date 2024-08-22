import React from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import styles from './Select.module.css';

interface Option<OptionType extends string> {
  value: OptionType;
  label: OptionType;
}

interface SelectProps<OptionType>
  extends Omit<
    ReactSelectProps<Option<OptionType>, false>,
    'options' | 'onChange'
  > {
  labelText?: string;
  options: OptionType[];
  onChange: (option: OptionType) => void;
}

const Select = <OptionType extends string>({
  labelText = '',
  options,
  onChange,
  ...props
}: SelectProps<OptionType>): React.ReactNode => {
  return (
    <div className={styles.selectContainer}>
      {labelText && <label>{labelText}</label>}
      <ReactSelect
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
        onChange={(changeValue: Option<OptionType> | null) => {
          onChange(changeValue?.value);
        }}
        {...props}
      />
    </div>
  );
};

export default Select;
