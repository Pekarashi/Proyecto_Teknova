-- 1. Crear la base de datos 
CREATE DATABASE IF NOT EXISTS draftosaurus
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_general_ci;

-- 2. Seleccionarla para usarla
USE draftosaurus;

-- --------------------------------------------------------
-- Estructura de tabla para la tabla `ficha`
CREATE TABLE `ficha` (
  `ficha_id` int(11) NOT NULL,
  `tipo_dinosaurio` varchar(20) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos para `ficha`
INSERT INTO `ficha` (`ficha_id`, `tipo_dinosaurio`, `imagen`) VALUES
(1, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(2, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(3, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(4, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(5, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(6, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png');

-- --------------------------------------------------------
-- Tabla `juega`
CREATE TABLE `juega` (
  `juega_id` int(11) NOT NULL,
  `puntos` int(11) NOT NULL,
  `fk_usuario_id` int(11) DEFAULT NULL,
  `fk_partida_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `partida`
CREATE TABLE `partida` (
  `partida_id` int(11) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `ganador` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `recinto`
CREATE TABLE `recinto` (
  `recinto_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo_regla` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla `usuario`
CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasenia` varchar(50) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos para `usuario`
INSERT INTO `usuario` (`usuario_id`, `nombre`, `correo`, `contrasenia`, `imagen`) VALUES
(1, 'master', 'rodrigo@gmail.com', '1234', 'https://i.imgur.com/QR48PuX.png'),
(2, 'master', 'ro@gmail.com', '1234', 'https://i.imgur.com/vmu94wH.png'),
(3, 'asd', 'luna@gmail.com', '1234', NULL);

-- Índices y AUTO_INCREMENT
ALTER TABLE `ficha` ADD PRIMARY KEY (`ficha_id`);
ALTER TABLE `juega` ADD PRIMARY KEY (`juega_id`), ADD KEY `fk_usuario_id` (`fk_usuario_id`), ADD KEY `fk_partida_id` (`fk_partida_id`);
ALTER TABLE `partida` ADD PRIMARY KEY (`partida_id`);
ALTER TABLE `recinto` ADD PRIMARY KEY (`recinto_id`);
ALTER TABLE `usuario` ADD PRIMARY KEY (`usuario_id`);

ALTER TABLE `ficha` MODIFY `ficha_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE `juega` MODIFY `juega_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `partida` MODIFY `partida_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `recinto` MODIFY `recinto_id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `usuario` MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

-- Relaciones
ALTER TABLE `juega`
  ADD CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuario` (`usuario_id`),
  ADD CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`fk_partida_id`) REFERENCES `partida` (`partida_id`);

COMMIT;
