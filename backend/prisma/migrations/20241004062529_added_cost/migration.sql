/*
  Warnings:

  - Changed the type of `orderCost` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderCost",
ADD COLUMN     "orderCost" INTEGER NOT NULL;
