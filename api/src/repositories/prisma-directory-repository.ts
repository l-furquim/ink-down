import type { Directory, Prisma } from "@prisma/client";
import type { DirectoryRepository } from "./directory-repository";

import { prisma } from "@/lib/prisma";

export class PrismaDirectoryRepository implements DirectoryRepository {
  async findById(id: number): Promise<Directory | null>{
    return await prisma.directory.findFirst({
      where: {
        id,
      },
    });
  };
  
  async create(data: Prisma.DirectoryCreateInput): Promise<void> {
    await prisma.directory.create({
      data
    });
  };
  
}