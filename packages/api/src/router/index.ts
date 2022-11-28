import { publicProcedure, router } from "../trpc";
import { z } from "zod";

import type { Context } from "../context";

export const appRouter = router({
    hi: publicProcedure.query(() => {
        return {
            greeting: "hello world",
        };
    }),
    hello: publicProcedure
        .input(
            z
                .object({
                    text: z.string(),
                })
                .optional()
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input?.text ?? "world"}`,
            };
        }),
});

export type AppRouter = typeof appRouter;
