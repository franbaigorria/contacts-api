-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "docType" TEXT NOT NULL,
    "docNum" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "landline" INTEGER[],
    "cellphone" INTEGER[],

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "description" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_docNum_key" ON "Contact"("docNum");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- AddForeignKey
ALTER TABLE "Adress" ADD CONSTRAINT "Adress_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
