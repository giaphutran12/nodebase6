import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/database";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure //=api call

    .query(() => {
      //query=get api call, mutation=post api call
      return prisma.user.findMany();
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
