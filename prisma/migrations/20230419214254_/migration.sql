/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "img" TEXT NOT NULL DEFAULT E'https://cdn-icons-png.flaticon.com/512/149/149071.png';
