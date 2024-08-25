import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { ConsoleType } from '../types/console.ts';
import { getConsoleList, removeConsole } from '../storages/consoleStorage.ts';

interface ContextProps {
  results: ConsoleType[];
  searchText: string;
  updateSearchText: (text: string) => void;
  removeCard: (id: string) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const CardContext = createContext<ContextProps>({
  results: [],
  searchText: '',
  updateSearchText: () => {},
  removeCard: () => {},
});

const CardProvider = ({ children }: ProviderProps) => {
  const [results, setResults] = useState<ConsoleType[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const updateResults = useCallback(() => {
    setResults(
      Object.values(getConsoleList()).filter((console) =>
        console.title.includes(searchText),
      ),
    );
  }, [searchText]);
  const updateSearchText = (text: string) => {
    setSearchText(text);
  };
  const removeCard = (id: string) => {
    removeConsole(id);
    updateResults();
  };

  useEffect(() => {
    updateResults();
  }, [updateResults]);

  return (
    <CardContext.Provider
      value={{
        results,
        searchText,
        updateSearchText,
        removeCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

const useSearch = () => useContext(CardContext);

export { CardProvider, useSearch };
