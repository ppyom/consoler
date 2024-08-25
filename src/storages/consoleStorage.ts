import moment from 'moment';
import type { ConsoleType } from '../types/console.ts';

const STORAGE_KEY = 'consoler';

const getByStorage = (): { [key: string]: ConsoleType } =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const saveToStorage = () =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consoleList));

const consoleList = getByStorage();

const createConsole = () => {
  const id = Date.now().toString();
  consoleList[id] = {
    id,
    title: '제목 없음',
    description: '',
    updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    console: [[]],
  };
  saveToStorage();
  return id;
};
const updateConsole = (id: string, updated: Partial<ConsoleType>) => {
  consoleList[id] = { ...getConsole(id), ...updated };
  saveToStorage();
};
const removeConsole = (id: string) => {
  delete consoleList[id];
  saveToStorage();
};
const getConsole = (id: string) => consoleList[id];
const getConsoleList = () => consoleList;

export {
  createConsole,
  updateConsole,
  removeConsole,
  getConsole,
  getConsoleList,
};
