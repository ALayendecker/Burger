CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (40) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    createdAt TIMESTAMP NULL,
    PRIMARY KEY
    (id)
)