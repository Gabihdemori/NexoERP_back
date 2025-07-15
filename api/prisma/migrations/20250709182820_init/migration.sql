-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `perfil` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `usuarioId` INTEGER NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Cliente_email_key`(`email`),
    UNIQUE INDEX `Cliente_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `preco` DOUBLE NOT NULL,
    `estoque` INTEGER NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemVenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vendaId` INTEGER NOT NULL,
    `produtoId` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `precoUnit` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RelatorioVenda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vendaId` INTEGER NOT NULL,
    `dataRelatorio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observacoes` VARCHAR(191) NULL,

    UNIQUE INDEX `RelatorioVenda_vendaId_key`(`vendaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Venda` ADD CONSTRAINT `Venda_clienteId_fkey` FOREIGN KEY (`clienteId`)  REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Venda` ADD CONSTRAINT `Venda_usuarioId_fkey` FOREIGN KEY (`usuarioId`)  REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_vendaId_fkey` FOREIGN KEY (`vendaId`)  REFERENCES `Venda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `ItemVenda` ADD CONSTRAINT `ItemVenda_produtoId_fkey` FOREIGN KEY (`produtoId`)  REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `RelatorioVenda` ADD CONSTRAINT `RelatorioVenda_vendaId_fkey` FOREIGN KEY (`vendaId`)  REFERENCES `Venda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;


