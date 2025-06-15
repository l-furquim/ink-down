export interface NoteDataType {
	title: string;
	id: string;
	archived: boolean;
	directoryId: number | null;
}

export interface DirectoryDataType {
	title: string;
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
