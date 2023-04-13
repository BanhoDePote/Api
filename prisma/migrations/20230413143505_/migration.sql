-- CreateTable
CREATE TABLE "Kitchen" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Kitchen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kitchen_userId_key" ON "Kitchen"("userId");

-- AddForeignKey
ALTER TABLE "Kitchen" ADD CONSTRAINT "Kitchen_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
