import { prisma } from '@/config';

async function create(data: any) {
  await prisma.session.deleteMany({
    where: {
      userId: data.userId
    }
  })

  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
