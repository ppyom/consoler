import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ConsoleType } from '../types/console.ts';
import { getConsoleList } from '../storages/consoleStorage.ts';

interface ContextProps {
  results: ConsoleType[];
  searchText: string;
  updateSearchText: (text: string) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<ContextProps>({
  results: [],
  searchText: '',
  updateSearchText: () => {},
});

const SearchProvider = ({ children }: ProviderProps) => {
  const consoleList = getConsoleList();
  const [results, setResults] = useState<ConsoleType[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const updateSearchText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    setResults(
      Object.values(consoleList).filter((console) =>
        console.title.includes(searchText),
      ),
    );
  }, [consoleList, searchText]);

  return (
    <SearchContext.Provider
      value={{
        results,
        searchText,
        updateSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
