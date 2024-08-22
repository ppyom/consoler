import React, { useEffect, useState } from 'react';
import { useConsole } from '../../../context/consoleContext.tsx';
import Input from '../../../components/commons/Input/Input.tsx';
import ColorInput from '../../../components/commons/ColorInput/ColorInput.tsx';
import Select from '../../../components/commons/Select/Select.tsx';
import Button from '../../../components/commons/Button/Button.tsx';
import styles from './Editor.module.css';

const Editor = () => {
  const {
    blocks,
    current,
    updateBlock,
    clearCurrentBlock,
    removeCurrentBlock,
  } = useConsole();

  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#00000000');
  const [fontSize, setFontSize] = useState<number>(0);
  const [fontSizeUnit, setFontSizeUnit] = useState<'px' | 'rem'>('px');
  const [fontWeight, setFontWeight] = useState<'normal' | 'bold'>('normal');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (current) {
      updateBlock(current.line, current.id, {
        id: current.id,
        text,
        color,
        bgColor,
        fontSize,
        fontSizeUnit,
        fontWeight,
      });
      clearCurrentBlock();
    }
  };

  const handleRemoveBtnClick = () => {
    removeCurrentBlock();
  };

  useEffect(() => {
    if (current) {
      const { text, color, bgColor, fontSize, fontSizeUnit, fontWeight } =
        blocks[current.line].find((b) => b.id === current.id);
      setText(text || '');
      setColor(color || '#000000');
      setBgColor(bgColor || '#00000000');
      setFontSize(fontSize || 16);
      setFontSizeUnit(fontSizeUnit || 'px');
      setFontWeight(fontWeight || 'normal');
    }
  }, [blocks, current]);

  return (
    <>
      {current && (
        <div className={styles.editor}>
          <form onSubmit={handleSubmit}>
            <Input
              id="text"
              type="text"
              labelText="내용"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <ColorInput
              id="color"
              color={color}
              setColor={setColor}
              labelText="글자 색상"
            />
            <ColorInput
              id="bgColor"
              color={bgColor}
              setColor={setBgColor}
              labelText="배경 색상"
            />
            <div className={styles.fontSizeContainer}>
              <Input
                id="fontSize"
                type="number"
                labelText="글자 크기"
                value={fontSize}
                onChange={({ target }) => setFontSize(parseInt(target.value))}
              />
              <Select
                name="fontSizeUnit"
                options={[
                  { value: 'px', label: 'px' },
                  { value: 'rem', label: 'rem' },
                ]}
                value={{ value: fontSizeUnit, label: fontSizeUnit }}
                onChange={(option) => setFontSizeUnit(option.value)}
              />
            </div>
            <Select
              name="fontWeight"
              labelText="글자 굵기"
              options={[
                { value: 'normal', label: 'normal' },
                { value: 'bold', label: 'bold' },
              ]}
              value={{ value: fontWeight, label: fontWeight }}
              onChange={(option) => setFontWeight(option.value)}
            />
            <Button type="submit">저장</Button>
            <Button type="button" onClick={handleRemoveBtnClick}>
              삭제
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Editor;
