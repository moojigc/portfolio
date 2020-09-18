CREATE DATABASE IF NOT EXISTS `PORTFOLIO`;

USE `PORTFOLIO`;

CREATE TABLE `project` (
    `id` VARCHAR(30) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `html_url` VARCHAR(255) NOT NULL,
    `homepage` VARCHAR(255) NOT NULL,
    `description` TEXT,
    PRIMARY KEY (`id`)
);