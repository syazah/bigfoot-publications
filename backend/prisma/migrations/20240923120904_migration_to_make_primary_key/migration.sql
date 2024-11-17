-- DropIndex
DROP INDEX "Admin_id_key";

-- AlterTable
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");
