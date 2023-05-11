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
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "descriptionAdress" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_docNum_key" ON "Contact"("docNum");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");
