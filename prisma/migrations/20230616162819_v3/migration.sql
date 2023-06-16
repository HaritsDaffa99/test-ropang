/*
  Warnings:

  - The primary key for the `UserOrder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `oID` on the `UserOrder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserOrder" DROP CONSTRAINT "UserOrder_pkey",
DROP COLUMN "oID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserOrder_pkey" PRIMARY KEY ("id");
