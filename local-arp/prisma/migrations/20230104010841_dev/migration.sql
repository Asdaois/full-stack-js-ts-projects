-- CreateTable
CREATE TABLE "Rango" (
    "id" SERIAL NOT NULL,
    "prefijo" TEXT NOT NULL,
    "desde" INTEGER NOT NULL,
    "hasta" INTEGER NOT NULL,

    CONSTRAINT "Rango_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "mac" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "rangoId" INTEGER,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("mac")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "ficha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "esAdministrador" BOOLEAN NOT NULL,
    "fmoEquipo" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivo_mac_key" ON "Dispositivo"("mac");

-- CreateIndex
CREATE UNIQUE INDEX "User_ficha_key" ON "User"("ficha");

-- CreateIndex
CREATE UNIQUE INDEX "User_usuario_key" ON "User"("usuario");

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_rangoId_fkey" FOREIGN KEY ("rangoId") REFERENCES "Rango"("id") ON DELETE SET NULL ON UPDATE CASCADE;
