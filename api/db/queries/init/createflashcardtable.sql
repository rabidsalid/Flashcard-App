CREATE TABLE `flashcards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(500) NULL,
  `answer` VARCHAR(500) NULL,
  `userid` VARCHAR(50) NULL,
  PRIMARY KEY (`id`)
);