-- CreateTable
CREATE TABLE `urls` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `original_url` VARCHAR(255) NULL,
    `expire_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
