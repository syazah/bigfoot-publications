-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "bookSold" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "bookQuantity" INTEGER NOT NULL DEFAULT 1;
