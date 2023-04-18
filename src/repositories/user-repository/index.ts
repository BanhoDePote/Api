import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function findByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name:true,
      email: true,
      password:true,
      employee: {
        select: {
          job: {
            select: {
              name: true
            }
          }
        }
      }
    }
  });
  
  const transformedUser = {
    id: user.id,
    name:user.name,
    email: user.email,
    password:user.password,
    employee: user.employee.map((e) => e.job.name).join(", ")
  };

  return transformedUser
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
