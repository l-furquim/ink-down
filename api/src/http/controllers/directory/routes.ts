import type { FastifyInstance } from "fastify";

import { creeateDirectory } from "./create-directory";

export async function directoryRoutes(instance: FastifyInstance) {
  instance.post("/create", creeateDirectory);
}