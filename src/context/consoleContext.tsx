import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { getConsole, updateConsole } from '../storages/consoleStorage.ts';
import type { ConsoleBlock, ConsoleType } from '../types/console.ts';

interface ProviderProps {
  id: string;
  children: React.ReactNode;
}

const ConsoleContext = createContext({});

const ConsoleProvider = ({ id, children }: ProviderProps) => {
  const [consoleItem, setConsoleItem] = useState<ConsoleType>(getConsole(id));
  const [selectedBlock, setSelectedBlock] = useState<{
    line: number;
    id: string;
  }>();

  const updateConsoleContents = useCallback(
    (console: ConsoleType) => {
      updateConsole(id, { ...console });
    },
    [id],
  );

  const blocks = useMemo(() => consoleItem.console, [consoleItem.console]);
  const setBlocks = useCallback(
    (fn: (prev: ConsoleBlock[][]) => ConsoleBlock[][]) => {
      const updated = {
        ...consoleItem,
        console: fn(blocks),
      };
      setConsoleItem(updated);
      updateConsoleContents(updated);
    },
    [blocks, consoleItem, updateConsoleContents],
  );

  const setCurrentBlock = (line: number, id: string) => {
    setSelectedBlock({ line, id });
  };
  const clearCurrentBlock = () => {
    setSelectedBlock(undefined);
  };
  const removeCurrentBlock = () => {
    setBlocks((prev) =>
      prev.map((blocks, idx) => {
        if (selectedBlock?.line === idx) {
          return blocks.filter((block) => {
            return block.id !== selectedBlock?.id;
          });
        }
        return blocks;
      }),
    );
    clearCurrentBlock();
  };
  const addLine = () => {
    setBlocks((prev) => [...prev, []]);
  };
  const addBlock = (line: number) => {
    setBlocks((prev) =>
      prev.map((blocks, idx) => {
        if (idx === line) {
          return [
            ...blocks,
            {
              id: Date.now().toString(),
            },
          ];
        }
        return blocks;
      }),
    );
  };
  const updateBlock = (line: number, id: string, updated: ConsoleBlock) => {
    setBlocks((prev) =>
      prev.map((blocks, idx) => {
        if (idx === line) {
          return blocks.map((block) => {
            if (block.id === id) {
              return updated;
            }
            return block;
          });
        }
        return blocks;
      }),
    );
  };
  const removeLine = (line: number) => {
    setBlocks((prev) => prev.filter((_, idx) => line !== idx));
  };
  const updateInformation = (title: string, description: string) => {
    updateConsoleContents({ ...consoleItem, title, description });
  };

  return (
    <ConsoleContext.Provider
      value={{
        consoleItem,
        blocks,
        current: selectedBlock,
        setCurrentBlock,
        clearCurrentBlock,
        removeCurrentBlock,
        addLine,
        removeLine,
        addBlock,
        updateBlock,
        updateInformation,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

const useConsole = () => useContext(ConsoleContext);

export { ConsoleProvider, useConsole };
