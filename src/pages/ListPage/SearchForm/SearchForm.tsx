import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { useSearch } from '../../../context/cardContext.tsx';
import Input from '../../../components/commons/Input/Input.tsx';
import Button from '../../../components/commons/Button/Button.tsx';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const { searchText, updateSearchText } = useSearch();
  const [text, setText] = useState<string>(searchText);

  const search = (value = text) => {
    updateSearchText(value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    search();
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setText(target.value);
    if (target.value === '') {
      search('');
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        placeholder="검색어를 입력해주세요."
        value={text}
        onChange={handleChange}
      />
      <Button>
        <Search />
      </Button>
    </form>
  );
};

export default SearchForm;
