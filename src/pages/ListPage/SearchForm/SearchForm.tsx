import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { useSearch } from '../../../context/searchContext.tsx';
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

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        placeholder="검색어를 입력해주세요."
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <Button>
        <Search />
      </Button>
    </form>
  );
};

export default SearchForm;
