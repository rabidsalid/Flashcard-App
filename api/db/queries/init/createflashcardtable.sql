CREATE TABLE `flashcards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(500) NOT NULL,
  `answer` VARCHAR(500) NOT NULL,
  `userid` VARCHAR(50) NULL,
  PRIMARY KEY (`id`)
);