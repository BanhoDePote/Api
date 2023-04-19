import { prisma } from '@/config';
import { notFoundError } from '@/errors';
import { Prisma } from '@prisma/client';

async function findByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name:true,
      email: true,
      password:true,
      img:true,
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

  if(!user){
    throw notFoundError();
  }
  
  const transformedUser = {
    id: user.id,
    name:user.name,
    email: user.email,
    password:user.password,
    img:user.img,
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
