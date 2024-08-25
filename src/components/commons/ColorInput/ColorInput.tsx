import React, { useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import Input from '../Input/Input.tsx';
import styles from './ColorInput.module.css';
import { hexRegExp, isHexColor } from '../../../utils/color.ts';

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
  const [active, setActive] = useState(false);

  const handleCloseColorPicker = () => {
    if (!isHexColor(color)) {
      setColor('#000000');
    }
    setActive(false);
  };

  return (
    <>
      <div className={styles.colorPicker} onClick={() => setActive(true)}>
        <div className={styles.colorInputContainer}>
          <Input
            type="text"
            labelText={labelText}
            value={color}
            onChange={({ target }) => setColor(target.value)}
            pattern={hexRegExp.source}
          />
          <div
            className={styles.colorChip}
            style={{ backgroundColor: color }}
          />
        </div>
        {active && (
          <HexAlphaColorPicker
            className={styles.picker}
            color={color}
            onChange={setColor}
          />
        )}
      </div>
      {active && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 999,
            width: '100%',
            height: '100%',
          }}
          onClick={handleCloseColorPicker}
        />
      )}
    </>
  );
};

export default ColorInput;
