const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("SQLite DB connected via Prisma");
  } catch (error) {
    console.error("Prisma DB connection failed:", error);
   
  }
};

module.exports = {
  prisma,
  connectDB,
};
