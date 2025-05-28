import type { Directory, Prisma } from "@prisma/client";

export interface DirectoryRepository {
   create(data: Prisma.DirectoryCreateInput): Promise<void>;
   findById(id: number): Promise<Directory | null>;
   delete(id: number): Promise<void>;
   renameDir(directory: Directory): Promise<void>;
}