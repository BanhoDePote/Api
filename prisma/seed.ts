import bcrypt from 'bcrypt';
import { CategoryDish, PrismaClient } from '@prisma/client';
import { Sql } from '@prisma/client/runtime';
const prisma = new PrismaClient();

async function main() {
  
  let user = await prisma.user.findFirst();

  const hashedPassword = await bcrypt.hash('32050832', 12);

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: 'kadson',
        password: hashedPassword,
        email: 'kadson@gmail.com',
      },
    });
  }

  const employees = [
    {
      name: 'Caixa',
    },
    {
      name: 'Garçom',
    },
    {
      name: 'Cozinha',
    },
  ];

  for (const employee of employees) {
    await prisma.jobTitle.create({
      data: employee,
    });
  }

  for (const dish of petisco) {
    await prisma.dish.create({
      data: dish,
    });
  }

  for (const dish of torres) {
    await prisma.dish.create({
      data: dish,
    });
  }

  for (const dish of refeicao) {
    await prisma.dish.create({
      data: dish,
    });
  }
}
deleteAllData();
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function deleteAllData() {
  try {
    await prisma.orderDish.deleteMany();
    await prisma.order.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.dish.deleteMany();
    await prisma.jobTitle.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();
    console.log('Todos os dados foram excluídos com sucesso!');
  } catch (err) {
    console.error('Erro ao excluir os dados:', err);
  }
}

const petisco = [
  {
    name: 'Filé Camarão Empanado c/fritas',
    price: 78.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Agulhina Frita',
    price: 39.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Batata Frita Porção',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Arrumadinho',
    price: 59.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Bisteca de Porco',
    price: 49.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldo de Camarão',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldo de Peixe',
    price: 18.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldo de Ostra',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldo de Ova de Peixe',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldeirada',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Caldo de Fava',
    price: 18.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Camarão Alho e Óleo',
    price: 69.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Carne de Sol c/ Macaxeira',
    price: 69.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Calabresa c/ Fritas',
    price: 57.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Frango a Passarinha c/Fritas',
    price: 69.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Filé c/ Fritas',
    price: 65.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Isca de Peixe c/Fritas',
    price: 54.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Ovo de Codorna',
    price: 14.0,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Peixe Inteiro Frito (Tilapia)',
    price: 71.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Picado de Carneiro',
    price: 37.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Arroz ou Macarrão',
    price: 9.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Feijão verde',
    price: 12.0,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Feijão Carioca ou Branco afarofado',
    price: 10.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Salada',
    price: 9.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Molho Rosa',
    price: 2.0,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Farofa',
    price: 3.5,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Macaxeira(cozida)',
    price: 12.9,
    category: CategoryDish.Petisco,
  },
  {
    name: 'Porção de Macaxeira Frita',
    price: 19.9,
    category: CategoryDish.Petisco,
  },
];

const refeicao = [
  {
    name: 'Bisteca de Porco',
    price: 99.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Calabresa',
    price: 99.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Carne de Sol',
    price: 119.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Camarão Alho e Óleo',
    price: 119.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Filé de Camarão',
    price: 139.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Frango a Passarinho',
    price: 109.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Galinha Caipira(inteira)',
    price: 129.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Galinha Caipira(metade)',
    price: 89.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Galinha Matriz(inteira)',
    price: 119.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Galinha Matriz(metade)',
    price: 85.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Peixe Inteiro Frito(cioba)',
    price: 159.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Peixe Inteiro Frito(Tilapia)',
    price: 109.9,
    category: CategoryDish.Refeicao,
  },
  {
    name: 'Peixe Posta Frito(do Mar)',
    price: 109.9,
    category: CategoryDish.Refeicao,
  },
];

const torres = [
  {
    name: 'Torre Simples 3L ',
    price: 35.0,
    category: CategoryDish.Torre,
  },
  {
    name: 'Torre Simples 2L ',
    price: 25.0,
    category: CategoryDish.Torre,
  },
  {
    name: 'Torre C/Fritas 3L ',
    price: 53.9,
    category: CategoryDish.Torre,
  },
  {
    name: 'Torre C/Fritas 2L ',
    price: 43.9,
    category: CategoryDish.Torre,
  },
  {
    name: 'Torre Frango a Passarinho e Fritas 3L',
    price: 94.9,
    category: CategoryDish.Torre,
  },
  {
    name: 'Torre Frango a Passarinho e Fritas 2L',
    price: 84.9,
    category: CategoryDish.Torre,
  },
];
