const prisma = require("./src/prisma");

afterEach(async () => {
  await prisma.news.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
