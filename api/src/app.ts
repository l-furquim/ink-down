import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import { verifyJwt } from "./http/middlewares/verify-jwt";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '120min',
  },
});

const publicRoutes = [
  '/authors/create',
  '/authors/code',
  '/authors/auth'
];


appRoutes(app);

app.addHook('preHandler', async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(request.originalUrl);

  if (publicRoutes.includes(request.originalUrl ?? request.url)) {
    return;
  }

  await verifyJwt(request, reply);
});

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Invalid data ", issues: error.flatten().fieldErrors });
  };

  if (env.NODE_ENV !== 'production') {
    console.error(error);
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }
  return reply.status(500).send({
    message: 'Internal server error.',
    cause: error.message,
    stack: error.stack,
  });
});
