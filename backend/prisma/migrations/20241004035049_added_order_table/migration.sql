-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "buyerID" TEXT NOT NULL,
    "addressID" TEXT NOT NULL,
    "bookID" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_buyerID_fkey" FOREIGN KEY ("buyerID") REFERENCES "Buyer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_addressID_fkey" FOREIGN KEY ("addressID") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_bookID_fkey" FOREIGN KEY ("bookID") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
