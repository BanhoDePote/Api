import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function create(data: Prisma.SessionUncheckedCreateInput) {
  // await prisma.session.deleteMany({
  //   where: {
  //     userId: data.userId
  //   }
  // })

  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;
