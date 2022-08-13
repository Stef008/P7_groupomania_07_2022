// fake hash pour 123456
const fakHash = "$2b$10$ZyFYLXORhq4UQCdJuvBxZuem1ZJld25VRWeleGOcULgG8L8nju4Ju"

const user1 = { email: "stef@gmail.com", password: fakHash };
const user2 = { email: "theo@gmail.com", password: fakHash };
const user3 = { email: "yoyo@gmail.com", password: fakHash };
const users = [user1, user2, user3];

module.exports = { users }

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = { prisma };