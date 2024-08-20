import Input from '../../../components/commons/Input/Input.tsx';
import Textarea from '../../../components/commons/Textarea/Textarea.tsx';
import Button from '../../../components/commons/Button/Button.tsx';
import styles from './InformationForm.module.css';

const InformationForm = () => {
  return (
    <form className={styles.information}>
      <Input id="consoleTitle" type="text" placeholder="제목을 입력해주세요." />
      <Textarea id="consoleDesc" placeholder="설명을 입력해주세요." />
      <Button>저장</Button>
    </form>
  );
};

export default InformationForm;
