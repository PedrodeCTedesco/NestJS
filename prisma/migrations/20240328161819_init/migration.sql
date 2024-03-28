-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "name" TEXT,
    "breed" TEXT NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onwer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "numberOfPets" INTEGER NOT NULL,

    CONSTRAINT "Onwer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cat_name_key" ON "Cat"("name");
