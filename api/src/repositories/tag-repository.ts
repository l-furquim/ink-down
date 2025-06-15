export interface TagRepository {

	create(): Promise<void>;
	findByAuthor(authorId: string);


}
