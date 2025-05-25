export interface NoteDataType {
  name: string,
  id: number,
  archived: boolean
};

export interface DirectoryDataType {
  name: string,
  id: number,
  son: DirectoryDataType | null,
  notes: NoteDataType[]
};