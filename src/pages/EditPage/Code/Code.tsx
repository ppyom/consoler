import { useConsole } from '../../../context/consoleContext.tsx';
import Button from '../../../components/commons/Button/Button.tsx';
import type { ConsoleBlock } from '../../../types/console.ts';
import styles from './Code.module.css';

const Code = () => {
  const { blocks } = useConsole();
  const makeTextCode = () =>
    blocks
      .map((line) =>
        line
          .map((item) => {
            if (item.text) {
              return `%c${item.text.replace(/"/g, '\\"').replace(/ /g, '\\ ')}`;
            } else {
              return '%c';
            }
          })
          .join(''),
      )
      .join('\\n');
  const makeStyleCode = () =>
    blocks
      .map((line) => line.map((item) => `"${styleFormatter(item)}"`).join(','))
      .join(',');
  const styleFormatter = (item: ConsoleBlock) =>
    item
      ? `${item.color ? `color: ${item.color};` : ''}${item.bgColor ? `background-color: ${item.bgColor};` : ''}${item.fontWeight ? `font-weight: ${item.fontWeight};` : ''}${item.fontSize ? `font-size: ${item.fontSize}${item.fontSizeUnit || 'rem'};` : ''}`
      : '';
  const consoleText = () =>
    `console.log("${makeTextCode()}",${makeStyleCode()})`;
  const handleCopyBtnClick = () => {
    const text = consoleText();
    navigator.clipboard.writeText(text).catch((error) => console.error(error));
  };
  return (
    <div className={styles.codeContainer}>
      <div className={styles.code}>{consoleText()}</div>
      <Button onClick={handleCopyBtnClick}>Copy</Button>
    </div>
  );
};

export default Code;
