CREATE DATABASE draftosaurus;
USE draftosaurus;

CREATE TABLE usuario (
    usuario_id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL, 
    correo VARCHAR(50) NOT NULL, 
    contrasenia VARCHAR(50) NOT NULL,
    PRIMARY KEY (usuario_id)
);

CREATE TABLE partida ( 
    partida_id INT NOT NULL AUTO_INCREMENT, 
    tiempo INT NOT NULL, 
    ganador VARCHAR(50) NOT NULL,
    PRIMARY KEY (partida_id)
);

CREATE TABLE juega (
    juega_id INT NOT NULL AUTO_INCREMENT,
    puntos INT NOT NULL,
    fk_usuario_id INT,
    fk_partida_id INT,
    PRIMARY KEY (juega_id),
    FOREIGN KEY (fk_usuario_id) REFERENCES usuario(usuario_id),
    FOREIGN KEY (fk_partida_id) REFERENCES partida(partida_id)
);

CREATE TABLE ficha ( 
    ficha_id INT NOT NULL AUTO_INCREMENT,
    tipo_dinosaurio VARCHAR(20) NOT NULL,
    PRIMARY KEY (ficha_id)
);

CREATE TABLE recinto ( 
    recinto_id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL, 
    tipo_regla VARCHAR(50) NOT NULL,
    PRIMARY KEY (recinto_id)
);
