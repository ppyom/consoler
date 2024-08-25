import React, { useState } from 'react';
import { useConsole } from '../../../context/consoleContext.tsx';
import Input from '../../../components/commons/Input/Input.tsx';
import Textarea from '../../../components/commons/Textarea/Textarea.tsx';
import Button from '../../../components/commons/Button/Button.tsx';
import styles from './InformationForm.module.css';

const InformationForm = () => {
  const { consoleItem, updateInformation } = useConsole();
  const [information, setInformation] = useState({
    title: consoleItem.title,
    description: consoleItem.description,
  });
  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const id = target.id;
    setInformation((prev) => ({ ...prev, [id]: target.value }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateInformation(information.title, information.description);
  };
  return (
    <form className={styles.information} onSubmit={handleSubmit}>
      <Input
        id="title"
        type="text"
        placeholder="제목을 입력해주세요."
        value={information.title}
        onChange={handleChange}
      />
      <Textarea
        id="description"
        placeholder="설명을 입력해주세요."
        value={information.description}
        onChange={handleChange}
      />
      <Button>저장</Button>
    </form>
  );
};

export default InformationForm;
