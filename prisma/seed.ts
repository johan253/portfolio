// eslint-disable-next-line @typescript-eslint/no-require-imports
const PrismaClient = require("@prisma/client").PrismaClient;
const pc = new PrismaClient();
async function main() {
  await pc.project.createMany({
    data: [
      {
        name: "Project 1",
        description: "Description 1",
        url: "https://github.com",
        github: "https://github.com",
        img: "https://via.placeholder.com/150",
        tags: ["tag1", "tag2"],
        order: 1,
      },
      {
        name: "Project 2",
        description: "Description 2",
        url: "https://github.com",
        github: "https://github.com",
        img: "https://via.placeholder.com/150",
        tags: ["tag1", "tag2"],
        order: 2,
      },
    ],
  });

  await pc.images.createMany({
    data: [
      {
        name: "johan",
        url: "https://via.placeholder.com/150",
      },
      {
        name: "resume",
        url: "https://via.placeholder.com/150",
      }
    ]
  });
}

main()
  .then(async () => {
    await pc.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await pc.$disconnect();
    process.exit(1);
  });
