create database admininkup;
drop database admininkup;
use admininkup;

CREATE TABLE adminuser(
adminuserid INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
lastname VARCHAR(100),
address VARCHAR(250),
phone VARCHAR(20),
email VARCHAR(200) UNIQUE NOT NULL,
password VARCHAR(150) NOT NULL,
is_deleted BOOLEAN DEFAULT FALSE
);
select * from adminuser;