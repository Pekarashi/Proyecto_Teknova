CREATE DATABASE draftosaurus;
USE draftosaurus;

CREATE TABLE usuario (
    usuario_id int PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(50) NOT null, 
    correo varchar(50) NOT null, 
    contrasenia varchar(50) NOT null
    );
    
CREATE TABLE partida ( 
    partida_id int PRIMARY KEY AUTO_INCREMENT, 
    tiempo int NOT null, 
    ganador varchar(50) NOT null
    );
    
CREATE TABLE juega (
    juega_id int PRIMARY KEY AUTO_INCREMENT,
    puntos int NOT null,
    fk_usuario_id int,
    fk_partida_id int,
    FOREIGN KEY (fk_usuario_id) REFERENCES usuario(usuario_id),
    FOREIGN KEY (fk_partida_id) REFERENCES partida(partida_id)
    );

CREATE TABLE ficha ( 
    ficha_id int PRIMARY KEY AUTO_INCREMENT,
    tipo_dinosaurio varchar(20) NOT null
    )
CREATE TABLE recinto ( 
    recinto_id int PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(50) NOT null, 
    tipo_regla varchar(50) NOT null
    ); 
