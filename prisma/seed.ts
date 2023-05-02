import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { Sql } from '@prisma/client/runtime';
const prisma = new PrismaClient();

async function main() {
  
  let user = await prisma.user.findFirst({where:{name:'kadson'}});

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

  const categoryIdFood = [
    {
      name: 'Refeição',
    },
    {
      name: 'Petisco',
    },
    {
      name: 'Torre',
    }, 
    {
      name: 'Bebidas',
    },
    {
      name: 'Aguardentes',
    },
    {
      name: 'Cachaças',
    },
  ];

  for (const employee of categoryIdFood) {
    await prisma.category.create({
      data: employee,
    });
  }

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

  for (const dish of bebidas) {
    await prisma.dish.create({
      data: dish,
    });
  }

  for (const dish of aguardentes) {
    await prisma.dish.create({
      data: dish,
    });
  }

  const jobTitle = await prisma.jobTitle.findFirst({ where: { name: 'Garçom' }})

  if(jobTitle && user){
     await prisma.employee.create({
      data: {
        userId: user.id,
        jobId:jobTitle.id
      }
    })
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
    await prisma.category.deleteMany();
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
    categoryId: 2
  },
  {
    name: 'Agulhina Frita',
    price: 39.9,
    categoryId: 2
  },
  {
    name: 'Batata Frita Porção',
    price: 19.9,
    categoryId: 2
  },
  {
    name: 'Arrumadinho',
    price: 59.9,
    categoryId: 2
  },
  {
    name: 'Bisteca de Porco',
    price: 49.9,
    categoryId: 2
  },
  {
    name: 'Caldo de Camarão',
    price: 19.9,
    categoryId: 2
  },
  {
    name: 'Caldo de Peixe',
    price: 18.9,
    categoryId: 2
  },
  {
    name: 'Caldo de Ostra',
    price: 19.9,
    categoryId: 2
  },
  {
    name: 'Caldo de Ova de Peixe',
    price: 19.9,
    categoryId: 2
  },
  {
    name: 'Caldeirada',
    price: 19.9,
    categoryId: 2
  },
  {
    name: 'Caldo de Fava',
    price: 18.9,
    categoryId: 2
  },
  {
    name: 'Camarão Alho e Óleo',
    price: 69.9,
    categoryId: 2
  },
  {
    name: 'Carne de Sol c/ Macaxeira',
    price: 69.9,
    categoryId: 2
  },
  {
    name: 'Calabresa c/ Fritas',
    price: 57.9,
    categoryId: 2
  },
  {
    name: 'Frango a Passarinha c/Fritas',
    price: 69.9,
    categoryId: 2
  },
  {
    name: 'Filé c/ Fritas',
    price: 65.9,
    categoryId: 2
  },
  {
    name: 'Isca de Peixe c/Fritas',
    price: 54.9,
    categoryId: 2
  },
  {
    name: 'Ovo de Codorna',
    price: 14.0,
    categoryId: 2
  },
  {
    name: 'Peixe Inteiro Frito (Tilapia)',
    price: 71.9,
    categoryId: 2
  },
  {
    name: 'Picado de Carneiro',
    price: 37.9,
    categoryId: 2
  },
  {
    name: 'Porção de Arroz ou Macarrão',
    price: 9.9,
    categoryId: 2
  },
  {
    name: 'Porção de Feijão verde',
    price: 12.0,
    categoryId: 2
  },
  {
    name: 'Porção de Feijão Carioca ou Branco afarofado',
    price: 10.9,
    categoryId: 2
  },
  {
    name: 'Porção de Salada',
    price: 9.9,
    categoryId: 2
  },
  {
    name: 'Porção de Molho Rosa',
    price: 2.0,
    categoryId: 2
  },
  {
    name: 'Porção de Farofa',
    price: 3.5,
    categoryId: 2
  },
  {
    name: 'Porção de Macaxeira(cozida)',
    price: 12.9,
    categoryId: 2
  },
  {
    name: 'Porção de Macaxeira Frita',
    price: 19.9,
    categoryId: 2
  },
];

const refeicao = [
  {
    name: 'Bisteca de Porco',
    price: 99.9,
    categoryId: 1,
  },
  {
    name: 'Calabresa',
    price: 99.9,
    categoryId: 1,
  },
  {
    name: 'Carne de Sol',
    price: 119.9,
    categoryId: 1,
  },
  {
    name: 'Camarão Alho e Óleo',
    price: 119.9,
    categoryId: 1,
  },
  {
    name: 'Filé de Camarão',
    price: 139.9,
    categoryId: 1,
  },
  {
    name: 'Frango a Passarinho',
    price: 109.9,
    categoryId: 1,
  },
  {
    name: 'Galinha Caipira(inteira)',
    price: 129.9,
    categoryId: 1,
  },
  {
    name: 'Galinha Caipira(metade)',
    price: 89.9,
    categoryId: 1,
  },
  {
    name: 'Galinha Matriz(inteira)',
    price: 119.9,
    categoryId: 1,
  },
  {
    name: 'Galinha Matriz(metade)',
    price: 85.9,
    categoryId: 1,
  },
  {
    name: 'Peixe Inteiro Frito(cioba)',
    price: 159.9,
    categoryId: 1,
  },
  {
    name: 'Peixe Inteiro Frito(Tilapia)',
    price: 109.9,
    categoryId: 1,
  },
  {
    name: 'Peixe Posta Frito(do Mar)',
    price: 109.9,
    categoryId: 1,
  },
];

const torres = [
  {
    name: 'Torre Simples 3L ',
    price: 35.0,
    categoryId: 3,
  },
  {
    name: 'Torre Simples 2L ',
    price: 25.0,
    categoryId: 3,
  },
  {
    name: 'Torre C/Fritas 3L ',
    price: 53.9,
    categoryId: 3,
  },
  {
    name: 'Torre C/Fritas 2L ',
    price: 43.9,
    categoryId: 3,
  },
  {
    name: 'Torre Frango a Passarinho e Fritas 3L',
    price: 94.9,
    categoryId: 3,
  },
  {
    name: 'Torre Frango a Passarinho e Fritas 2L',
    price: 84.9,
    categoryId: 3,
  },
];

const bebidas = [
  {
    name: 'Agua Mineral c/ gás',
    price: 3.0,
    categoryId: 4,
  },
  {
    name: 'Agua Mineral s/ gás',
    price: 2.5,
    categoryId: 4,
  },
  {
    name: 'Coco Verde Gelado ou Natural',
    price: 4,
    categoryId: 4,
  },
  {
    name: 'Água de Coco',
    price: 13.9,
    categoryId: 4,
  },
  {
    name: 'Refrigerante 1 Litro (Coca ou Guaraná)',
    price: 9,
    categoryId: 4,
  },
  {
    name: 'Copo suco',
    price: 6,
    categoryId: 4,
  },
  {
    name: 'Energético',
    price: 9,
    categoryId: 4,
  },
  {
    name: 'Jarra de suco',
    price: 16.90,
    categoryId: 4,
  },
  {
    name: 'Caipirinha',
    price: 8,
    categoryId: 4,
  },
  {
    name: 'Caipirosca',
    price: 10,
    categoryId: 4,
  },
  {
    name: 'Caipirosca c/ leite condesado',
    price: 12,
    categoryId: 4,
  },
  {
    name: 'Cerveja Litrão',
    price: 12,
    categoryId: 4,
  },
  {
    name: 'Cerveja sem álcool',
    price: 6,
    categoryId: 4,
  },
  {
    name: 'Cerveja Heineken',
    price: 12,
    categoryId: 4,
  },
  {
    name: 'Conhaque Dreher',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Campari',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Martini Bianco e Rose',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Ron Montilla',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Vodka Smirnof',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Vodka Slova',
    price: 4,
    categoryId: 4,
  },
  {
    name: 'Vinho Quinta do Morgatto',
    price: 24,
    categoryId: 4,
  },
  {
    name: 'Whisky Johnnie Walker Red',
    price: 8,
    categoryId: 4,
  },
  {
    name: 'Whisky Old Eight',
    price: 5,
    categoryId: 4,
  },
  {
    name: 'Whisky Black White',
    price: 8,
    categoryId: 4,
  },
  {
    name: 'Whisky Teacher',
    price: 7,
    categoryId: 4,
  },
  {
    name: 'Whisky Old Par',
    price: 12,
    categoryId: 4,
  },
];

const aguardentes = [
  {
    name: 'Aguardente de cana 51',
    price: 3.0,
    categoryId: 5,
  },
  {
    name: 'Aguardente de cana Pitú',
    price: 3,
    categoryId: 5,
  },
  {
    name: 'Aguardente de cana Caranguejo',
    price: 3.0,
    categoryId: 5,
  },
  {
    name: 'Burrinho de cana 51 ou Pitú',
    price: 12,
    categoryId: 5,
  },
  {
    name: 'Burrinho de cachaça Ypioca ou Caranguejo Ouro',
    price: 15,
    categoryId: 5,
  },
]