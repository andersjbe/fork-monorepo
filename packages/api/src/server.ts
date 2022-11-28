import fastifyCors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";

import { createContext } from "./context";
import { appRouter } from "./router";

const server = fastify({
    maxParamLength: 5000,
});

server.register(fastifyCors, { origin: "*" });

server.register(fastifyTRPCPlugin, {
    prefix: "/trpx",
    trpcOptions: { router: appRouter, createContext },
});

async () => {
    try {
        await server.listen(Number(process.env.PORT ?? 8000));
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
