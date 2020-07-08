export interface TodoGroup {
	id: number;
	name: string;
	items: TodoItem[];
}

export interface TodoItem {
	id: number;
	name: string;
	isDone: boolean;
}
