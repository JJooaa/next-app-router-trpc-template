import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
});

export type AppRouter = typeof appRouter;
