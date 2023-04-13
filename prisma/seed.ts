import bcrypt from 'bcrypt';
import { CategoryDish, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  let user = await prisma.user.findFirst();

  const hashedPassword = await bcrypt.hash('32050832', 12);

  if (!user) {
    user = await prisma.user.create({
      data: {
        name:"kadson",
        password:hashedPassword,
        email:'kadson@gmail.com'
      },
    });
  }



 const dishes = [
    {
      name: 'Arroz com feijão',
      price: 10.50,
      category: CategoryDish.Refeicao,
    },
    {
      name: 'Bife a cavalo',
      price: 15.00,
      category: CategoryDish.Refeicao,
    },
    {
      name: 'Lasanha',
      price: 20.00,
      category: CategoryDish.Refeicao,
    },
  ];

  for (const dish of dishes) {
    await prisma.dish.create({
      data: dish,
    });
  }

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });