import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  createConsole,
  getConsole,
  updateConsole,
} from '../storages/consoleStorage.ts';
import type { ConsoleBlock, ConsoleType } from '../types/console.ts';

interface ProviderProps {
  id?: string;
  children: React.ReactNode;
}

const ConsoleContext = createContext({});

const ConsoleProvider = ({ id, children }: ProviderProps) => {
  const targetId = useMemo(() => id || createConsole(), [id]);
  const [consoleItem, setConsoleItem] = useState<ConsoleType>(
    getConsole(targetId),
  );
  const [selectedBlock, setSelectedBlock] = useState<{
    line: number;
    id: string;
  }>();

  const blocks = useMemo(() => consoleItem.console, [consoleItem.console]);
  const setBlocks = useCallback(
    (fn) => {
      const updated = {
        ...consoleItem,
        console: fn(blocks),
      };
      setConsoleItem(updated);
      updateConsoleContents(updated);
    },
    [consoleItem.console],
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
  const updateInformation = (title, description) => {
    updateConsoleContents({ ...consoleItem, title, description });
  };
  const updateConsoleContents = (console) => {
    updateConsole(targetId, { ...console });
  };

  return (
    <ConsoleContext.Provider
      value={{
        blocks,
        current: selectedBlock,
        setCurrentBlock,
        clearCurrentBlock,
        removeCurrentBlock,
        addLine,
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
