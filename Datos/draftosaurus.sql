-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS `draftosaurus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `draftosaurus`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------
-- Tabla: usuario
-- --------------------------------------------------------
CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasenia` varchar(50) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuario` (`usuario_id`, `nombre`, `correo`, `contrasenia`, `imagen`) VALUES
(4, 'rodrigo', 'rodrigo@gmail.com', '123456', NULL);

-- --------------------------------------------------------
-- Tabla: partida
-- --------------------------------------------------------
CREATE TABLE `partida` (
  `partida_id` int(11) NOT NULL AUTO_INCREMENT,
  `tiempo` int(11) NOT NULL,
  `ganador` varchar(50) NOT NULL,
  `fk_usuario_id` int(11) DEFAULT NULL,
  `turno_actual` int(11) DEFAULT 0,
  `ronda_actual` int(11) NOT NULL DEFAULT 1,
  `puntaje` text DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  PRIMARY KEY (`partida_id`),
  KEY `fk_usuario_id` (`fk_usuario_id`),
  CONSTRAINT `partida_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `partida` (`partida_id`, `tiempo`, `ganador`, `fk_usuario_id`, `turno_actual`, `ronda_actual`, `puntaje`, `fecha_fin`) VALUES
(36, 0, 'r', 4, 1, 1, '[{"nombre":"r","puntos":0},{"nombre":"o","puntos":0}]', '2025-10-29 22:13:53');

-- --------------------------------------------------------
-- Tabla: ficha
-- --------------------------------------------------------
CREATE TABLE `ficha` (
  `ficha_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_dinosaurio` varchar(20) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`ficha_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `ficha` (`ficha_id`, `tipo_dinosaurio`, `imagen`) VALUES
(7, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(8, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(9, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(10, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(11, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(12, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(13, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(14, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(15, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(16, 'Stegosaurus', 'https://i.imgur.com/6akD1K2.png'),
(17, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(18, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(19, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(20, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(21, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(22, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(23, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(24, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(25, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(26, 'Triceratops', 'https://i.imgur.com/YR61Aub.png'),
(27, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(28, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(29, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(30, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(31, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(32, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(33, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(34, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(35, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(36, 'Espinosaurio', 'https://i.imgur.com/z1WjVCw.png'),
(37, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(38, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(39, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(40, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(41, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(42, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(43, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(44, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(45, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(46, 'T-Rex', 'https://i.imgur.com/hYrkrlG.png'),
(47, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(48, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(49, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(50, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(51, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(52, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(53, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(54, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(55, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(56, 'Parasaurio', 'https://i.imgur.com/VimMp4W.png'),
(57, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(58, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(59, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(60, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(61, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(62, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(63, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(64, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(65, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png'),
(66, 'Brachiosaurus', 'https://i.imgur.com/tumUHHf.png');

-- --------------------------------------------------------
-- Tabla: recinto
-- --------------------------------------------------------
CREATE TABLE `recinto` (
  `recinto_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `tipo_regla` varchar(50) NOT NULL,
  PRIMARY KEY (`recinto_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Tabla: jugadores
-- --------------------------------------------------------
CREATE TABLE `jugadores` (
  `jugador_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `turno` int(11) DEFAULT 0,
  `fk_partida_id` int(11) DEFAULT NULL,
  `tableroJSON` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `terminado_turno` tinyint(1) DEFAULT 0,
  `tablero_json` text NOT NULL DEFAULT '[]',
  PRIMARY KEY (`jugador_id`),
  KEY `jugadores_ibfk_1` (`fk_partida_id`),
  CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`fk_partida_id`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `jugadores` (`jugador_id`, `nombre`, `turno`, `fk_partida_id`, `tableroJSON`, `terminado_turno`, `tablero_json`) VALUES
(91, 'r', 1, 36, NULL, 0, '[]'),
(92, 'o', 2, 36, NULL, 0, '[]');

-- --------------------------------------------------------
-- Tabla: juega
-- --------------------------------------------------------
CREATE TABLE `juega` (
  `juega_id` int(11) NOT NULL AUTO_INCREMENT,
  `puntos` int(11) NOT NULL,
  `fk_usuario_id` int(11) DEFAULT NULL,
  `fk_partida_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`juega_id`),
  KEY `juega_ibfk_1` (`fk_usuario_id`),
  KEY `juega_ibfk_2` (`fk_partida_id`),
  CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE CASCADE,
  CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`fk_partida_id`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
