-- CreateTable
CREATE TABLE "UserOrderTest" (
    "id" SERIAL NOT NULL,
    "menuQuantity" INTEGER NOT NULL,
    "mID" INTEGER NOT NULL,

    CONSTRAINT "UserOrderTest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserOrderTest" ADD CONSTRAINT "UserOrderTest_mID_fkey" FOREIGN KEY ("mID") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
