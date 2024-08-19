import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import Input from '../Input/Input.tsx';
import styles from './ColorInput.module.css';

interface ColorInputProps {
  labelText?: string;
  color: string;
  setColor: (color: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({
  labelText = '',
  color,
  setColor,
}) => {
  const [_color, _setColor] = useState(color);
  const [active, setActive] = useState(false);
  const hexPattern = useMemo(
    () => /^#(([a-f0-9]{6}([a-f0-9]{2})?)|([a-f0-9]{3}([a-f0-9])?))$/i,
    [],
  );

  const handleCloseColorPicker = useCallback(
    ({ target }: MouseEvent) => {
      if (!hexPattern.test(_color)) {
        _setColor(color);
      }
      setActive(!!target.closest(`.${styles.colorPicker}`));
      setColor(_color);
    },
    [_color, color, hexPattern, setColor],
  );

  useEffect(() => {
    document.addEventListener('click', handleCloseColorPicker);
    return () => {
      document.removeEventListener('click', handleCloseColorPicker);
    };
  }, [handleCloseColorPicker]);

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorInputContainer}>
        <Input
          type="text"
          labelText={labelText}
          value={_color}
          onChange={({ target }) => _setColor(target.value)}
          pattern={hexPattern.source}
        />
        <div className={styles.colorChip} style={{ backgroundColor: _color }} />
      </div>
      {active && (
        <HexAlphaColorPicker
          className={styles.picker}
          color={_color}
          onChange={_setColor}
        />
      )}
    </div>
  );
};

export default ColorInput;
