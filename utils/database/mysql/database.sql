CREATE DATABASE typescript;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(title, description, image_url) values ("Andres", "Cuello", "https://twitter.com/")

INSERT INTO users SET ?

SELECT * FROM users

SELECT * FROM users WHERE id = ?

DESCRIBE users;