import type { FastifyInstance } from "fastify";

import { creeateDirectory } from "./create-directory";
import deleteDirectoryController from "./delete-directory";
import renameDirectory from "./rename-directory";
import getAuthorDirectories from "./get-author-directories";

export async function directoryRoutes(instance: FastifyInstance) {
  instance.post("/create", creeateDirectory);
  instance.delete("/delete", deleteDirectoryController);
  instance.put("/rename", renameDirectory);
  instance.get("/author", getAuthorDirectories);
}