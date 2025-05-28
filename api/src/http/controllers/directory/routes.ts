import type { FastifyInstance } from "fastify";

import { creeateDirectory } from "./create-directory";
import deleteDirectoryController from "./delete-directory";
import renameDirectory from "./rename-directory";

export async function directoryRoutes(instance: FastifyInstance) {
  instance.post("/create", creeateDirectory);
  instance.delete("/delete", deleteDirectoryController);
  instance.put("/rename", renameDirectory);
}