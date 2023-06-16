/*
  Warnings:

  - The primary key for the `Menu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `menuDescription` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `menuID` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `menuName` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the column `menuPrice` on the `Menu` table. All the data in the column will be lost.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `paymentID` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentStatus` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `paymentValue` on the `Payment` table. All the data in the column will be lost.
  - The primary key for the `Table` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tableID` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `tableQuantity` on the `Table` table. All the data in the column will be lost.
  - You are about to drop the column `tableSize` on the `Table` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userEmail` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userPNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userPassword` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calorie` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qty` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserOrder" DROP CONSTRAINT "UserOrder_mID_fkey";

-- DropForeignKey
ALTER TABLE "UserOrder" DROP CONSTRAINT "UserOrder_pID_fkey";

-- DropForeignKey
ALTER TABLE "UserOrder" DROP CONSTRAINT "UserOrder_tID_fkey";

-- DropForeignKey
ALTER TABLE "UserOrder" DROP CONSTRAINT "UserOrder_uID_fkey";

-- DropIndex
DROP INDEX "User_userEmail_key";

-- AlterTable
ALTER TABLE "Menu" DROP CONSTRAINT "Menu_pkey",
DROP COLUMN "menuDescription",
DROP COLUMN "menuID",
DROP COLUMN "menuName",
DROP COLUMN "menuPrice",
ADD COLUMN     "calorie" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "fat" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "ingredient" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD CONSTRAINT "Menu_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "paymentID",
DROP COLUMN "paymentStatus",
DROP COLUMN "paymentValue",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "status" "status" NOT NULL DEFAULT 'COMPLETED',
ADD COLUMN     "value" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Table" DROP CONSTRAINT "Table_pkey",
DROP COLUMN "tableID",
DROP COLUMN "tableQuantity",
DROP COLUMN "tableSize",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "qty" INTEGER NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL,
ADD CONSTRAINT "Table_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userEmail",
DROP COLUMN "userID",
DROP COLUMN "userName",
DROP COLUMN "userPNumber",
DROP COLUMN "userPassword",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_uID_fkey" FOREIGN KEY ("uID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_mID_fkey" FOREIGN KEY ("mID") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_tID_fkey" FOREIGN KEY ("tID") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_pID_fkey" FOREIGN KEY ("pID") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
