import makeGetAuthorDirectoriesUseCase from "@/use-cases/factories/directory/make-get-author-directories-use-case";
import type { FastifyReply, FastifyRequest } from "fastify";

export default async function getAuthorDirectories(req: FastifyRequest, reply: FastifyReply) {

  const authorId = req.user.sub;
  const useCase = makeGetAuthorDirectoriesUseCase();

  try {
    const directories = await useCase.get({
      authorId,
    });

    if(directories.length === 0) {
      return reply.status(204).send();
    }

    return reply.status(200).send({
      directories,
    });

  } catch (e) {
    console.log(e);
  }
}