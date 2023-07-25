

export interface item {
	id: number;
	parentId: number;
	name: string;
}

export interface Data {
	list0: item[];
	list1: item[];
}

export interface DataResponce {
	data: Data;
}
