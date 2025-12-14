import { PrismaClient } from "@/generated/prisma/client";

//this is what happens in development because of hot reloading
//will create multiple prisma instances,degrading developing performance
//so we use global to store the prisma instance
//if there is already a prisma instance in global, use it
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
export default prisma;
