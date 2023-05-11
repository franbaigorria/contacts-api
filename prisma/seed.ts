import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const contact1 = await prisma.contact.upsert({
    where: { docNum: 40000000 },
    update: {},
    create: {
      name: 'Francisco',
      surName: 'Baigorria',
      age: 24,
      email: 'franbaigorria21@gmail.com',
      docType: 'DNI',
      docNum: 40000000,
      adress: {
        create: { city: 'Laguna Larga', street: 'Illia', height: 100 },
      },
      landline: 444444,
      cellphone: 33334444,
    },
  });

  console.log({ contact1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
