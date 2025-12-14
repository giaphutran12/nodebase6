import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
export const appRouter = createTRPCRouter({
  //data access layer - must use protecteProcedure to enforce auth
  getUsers: protectedProcedure //=api call

    .query(({ ctx }) => {
      //query=get api call, mutation=post api call
      return prisma.user.findMany();
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
