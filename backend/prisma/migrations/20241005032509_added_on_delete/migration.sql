-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_bookID_fkey";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bookID_fkey" FOREIGN KEY ("bookID") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
