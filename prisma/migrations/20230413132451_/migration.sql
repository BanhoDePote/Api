/*
  Warnings:

  - Added the required column `category` to the `dishes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusDish" AS ENUM ('Preparando', 'Pronto', 'Fila');

-- CreateEnum
CREATE TYPE "CategoryDish" AS ENUM ('Refeicao', 'Petisco', 'Bebidas', 'Cachacas', 'Torre');

-- AlterTable
ALTER TABLE "dishes" ADD COLUMN     "category" "StatusDish" NOT NULL;

-- AlterTable
ALTER TABLE "orders_dishes" ADD COLUMN     "status" "StatusDish" NOT NULL DEFAULT E'Fila';
