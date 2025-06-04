export interface NoteDataType {
	name: string;
	id: string;
	archived: boolean;
}

export interface DirectoryDataType {
	name: string;
	id: number;
	parentId: number | null;
	childrens: DirectoryDataType[] | null;
	notes: NoteDataType[];
}

export interface TagsDataType {
	name: string;
	colorHex: string;
	id: number;
}
