-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('COMPLETED', 'CANCELLED', 'IN_PROGRESS');

-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPassword" TEXT NOT NULL,
    "userPNumber" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Menu" (
    "menuID" SERIAL NOT NULL,
    "menuName" TEXT NOT NULL,
    "menuPrice" INTEGER NOT NULL,
    "menuDescription" TEXT,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuID")
);

-- CreateTable
CREATE TABLE "Table" (
    "tableID" SERIAL NOT NULL,
    "tableSize" INTEGER NOT NULL,
    "tableQuantity" INTEGER NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("tableID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentID" SERIAL NOT NULL,
    "paymentValue" INTEGER NOT NULL,
    "paymentStatus" "status" NOT NULL DEFAULT 'COMPLETED',

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentID")
);

-- CreateTable
CREATE TABLE "UserOrder" (
    "oID" SERIAL NOT NULL,
    "uID" INTEGER NOT NULL,
    "mID" INTEGER NOT NULL,
    "tID" INTEGER NOT NULL,
    "pID" INTEGER NOT NULL,
    "menuQuantity" INTEGER NOT NULL,
    "orderPax" INTEGER NOT NULL,
    "orderPrice" INTEGER NOT NULL,
    "orderDineInStatus" "status" NOT NULL DEFAULT 'IN_PROGRESS',
    "orderDate" DATE NOT NULL,
    "orderTime" TIME NOT NULL,
    "orderNotes" TEXT,
    "orderCreateOrderDate" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderSystemStatus" "status" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "UserOrder_pkey" PRIMARY KEY ("oID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrder_uID_key" ON "UserOrder"("uID");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrder_tID_key" ON "UserOrder"("tID");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrder_pID_key" ON "UserOrder"("pID");

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_uID_fkey" FOREIGN KEY ("uID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_mID_fkey" FOREIGN KEY ("mID") REFERENCES "Menu"("menuID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_tID_fkey" FOREIGN KEY ("tID") REFERENCES "Table"("tableID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrder" ADD CONSTRAINT "UserOrder_pID_fkey" FOREIGN KEY ("pID") REFERENCES "Payment"("paymentID") ON DELETE RESTRICT ON UPDATE CASCADE;
