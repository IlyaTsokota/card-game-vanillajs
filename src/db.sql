DROP DATABASE IF EXISTS sao_card_battle;
CREATE DATABASE IF NOT EXISTS sao_card_battle;
/* CREATE USER IF NOT EXISTS 'itsokota' @'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON sao_card_battle.* TO 'itsokota' @'localhost';
FLUSH PRIVILEGES; */
USE sao_card_battle;
CREATE TABLE Users (
  u_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  u_login VARCHAR(30) NOT NULL,
  u_password VARCHAR(30) NOT NULL,
  u_img LONGBLOB NOT NULL,
  u_isadmin BOOLEAN NOT NULL
);
CREATE TABLE Statisticks(
  s_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  u_id INT(6) UNSIGNED,
  CONSTRAINT FK_StatistiksUser FOREIGN KEY (u_id) REFERENCES Users(u_id)
);
CREATE TABLE Rooms(
  r_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  r_name VARCHAR(30) NOT NULL,
  r_win_id INT(6),
  u_id INT(6) UNSIGNED,
  u_enemy INT(6) UNSIGNED,
  CONSTRAINT FK_RoomsUser FOREIGN KEY (u_id) REFERENCES Users(u_id),
  CONSTRAINT FK_RoomsEnemy FOREIGN KEY (u_enemy) REFERENCES Users(u_id)
);
CREATE TABLE StatistickLine(
  sl_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  r_id INT(6) UNSIGNED,
  s_id INT(6) UNSIGNED,
  CONSTRAINT FK_StatistikLineRoom FOREIGN KEY (r_id) REFERENCES Rooms(r_id),
  CONSTRAINT FK_StatistikLineStatisticks FOREIGN KEY (s_id) REFERENCES Statisticks(s_id)
);
CREATE TABLE Cards (
  c_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  c_name VARCHAR(30) NOT NULL,
  c_cost int(3) NOT NULL,
  c_attack int(3) NOT NULL,
  c_protection int(3) NOT NULL,
  u_img LONGBLOB NOT NULL
);