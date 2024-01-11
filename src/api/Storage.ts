import type { ConsoleBlock } from "../components/ConsoleEditor/types";

const STORAGE_KEY = 'console-maker-blocks';

interface ItemsType {
	[id: string]: {
		title: string;
		blocks: ConsoleBlock[][];
		modifiedTime: number;
	}
}

class Storage {
	private db: ItemsType;
	constructor() {
		const str = localStorage.getItem(STORAGE_KEY) || '{}';
		this.db = JSON.parse(str);
	}

	getItems(): ItemsType {
		return this.db;
	}

	getItem(id: string): ConsoleBlock[][] {
		if(id in this.db) {
			return this.db[id].blocks;
		} else {
			return [];
		}
	}

	getTitle(id: string): string {
		return id in this.db ? this.db[id].title : '';
	}

	saveItem(id: string, blocks: ConsoleBlock[][], title?: string) {
		const newData = { ...this.db, [id]: { title: title || '제목 없음', blocks, modifiedTime: new Date().getTime() } };
		this.db = newData;
		localStorage.setItem('console-maker-blocks', JSON.stringify(newData));
	}
}

const storage = new Storage()

export default storage;