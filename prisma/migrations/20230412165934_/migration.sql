/*
  Warnings:

  - You are about to drop the column `user_id` on the `Waiter` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Waiter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Waiter" DROP CONSTRAINT "Waiter_user_id_fkey";

-- AlterTable
ALTER TABLE "Waiter" DROP COLUMN "user_id",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Waiter" ADD CONSTRAINT "Waiter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
