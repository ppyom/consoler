import type { ConsoleBlock } from "../components/ConsoleEditor/types";

const STORAGE_KEY = 'console-maker-blocks';

class Storage {
	private db: { [id: string]: ConsoleBlock[][] };
	constructor() {
		const str = localStorage.getItem(STORAGE_KEY) || '{}';
		this.db = JSON.parse(str);
	}

	getItem(id: string): ConsoleBlock[][] {
		if(id in this.db) {
			return this.db[id];
		} else {
			return [[]];
		}
	}

	saveItem(id: string, blocks: ConsoleBlock[][]) {
		const newData = { ...this.db, [id]: blocks };
		this.db = newData;
		localStorage.setItem('console-maker-blocks', JSON.stringify(newData));
	}
}

const storage = new Storage()

export default storage;