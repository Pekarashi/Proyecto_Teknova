-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2025 a las 22:40:27
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `draftosaurus`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha`
--

CREATE TABLE `ficha` (
  `ficha_id` int(11) NOT NULL,
  `tipo_dinosaurio` varchar(20) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ficha`
--

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

--
-- Estructura de tabla para la tabla `juega`
--

CREATE TABLE `juega` (
  `juega_id` int(11) NOT NULL,
  `puntos` int(11) NOT NULL,
  `fk_usuario_id` int(11) DEFAULT NULL,
  `fk_partida_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `jugador_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `turno` int(11) DEFAULT 0,
  `fk_partida_id` int(11) DEFAULT NULL,
  `tableroJSON` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tableroJSON`)),
  `terminado_turno` tinyint(1) DEFAULT 0,
  `tablero_json` text NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`jugador_id`, `nombre`, `turno`, `fk_partida_id`, `tableroJSON`, `terminado_turno`, `tablero_json`) VALUES
(1, 'r', 0, 1, NULL, 0, '[]'),
(2, 'o', 1, 1, NULL, 0, '[]'),
(3, 'r', 0, 2, NULL, 0, '[]'),
(4, 'o', 1, 2, NULL, 0, '[]'),
(5, 'r', 0, 3, NULL, 0, '[]'),
(6, 'o', 1, 3, NULL, 0, '[]'),
(7, 'r', 0, 4, NULL, 0, '[]'),
(8, 'o', 1, 4, NULL, 0, '[]'),
(9, 'r', 1, 5, NULL, 0, '[]'),
(10, 'o', 2, 5, NULL, 0, '[]'),
(11, 'r', 1, 8, NULL, 0, '[]'),
(12, 'o', 2, 8, NULL, 0, '[]'),
(13, 'r', 1, 9, NULL, 0, '[]'),
(14, 'o', 2, 9, NULL, 0, '[]'),
(15, 'rodrigo', 1, 10, NULL, 0, '[]'),
(16, 'nico', 2, 10, NULL, 0, '[]'),
(17, 'rodrigo', 1, 11, NULL, 0, '[]'),
(18, 'nico', 2, 11, NULL, 0, '[]'),
(19, 'r', 1, 12, NULL, 0, '[]'),
(20, 'o', 2, 12, NULL, 0, '[]'),
(21, 'r', 1, 13, NULL, 0, '[]'),
(22, 'o', 2, 13, NULL, 0, '[]'),
(23, 'd', 3, 13, NULL, 0, '[]'),
(24, 'r', 4, 13, NULL, 0, '[]'),
(25, 'i', 5, 13, NULL, 0, '[]'),
(26, 'Jugador 1', 1, 14, NULL, 0, '[]'),
(27, 'Jugador 2', 2, 14, NULL, 0, '[]'),
(28, 'Jugador 3', 3, 14, NULL, 0, '[]'),
(29, 'Jugador 4', 4, 14, NULL, 0, '[]'),
(30, 'Jugador 5', 5, 14, NULL, 0, '[]'),
(31, 'r', 1, 15, NULL, 0, '[]'),
(32, 'o', 2, 15, NULL, 0, '[]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `partida_id` int(11) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `ganador` varchar(50) NOT NULL,
  `fk_usuario_id` int(11) DEFAULT NULL,
  `turno_actual` int(11) DEFAULT 0,
  `ronda_actual` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`partida_id`, `tiempo`, `ganador`, `fk_usuario_id`, `turno_actual`, `ronda_actual`) VALUES
(1, 0, '', 4, 0, 1),
(2, 0, '', 4, 0, 1),
(3, 0, '', 4, 0, 1),
(4, 0, '', 4, 0, 1),
(5, 0, '', 4, 1, 1),
(7, 0, '', 4, 1, 1),
(8, 0, '', 4, 1, 1),
(9, 0, '', 4, 1, 1),
(10, 0, '', 4, 1, 1),
(11, 0, '', 4, 1, 1),
(12, 0, '', 4, 1, 1),
(13, 0, '', 4, 1, 1),
(14, 0, '', 4, 1, 1),
(15, 0, '', 4, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recinto`
--

CREATE TABLE `recinto` (
  `recinto_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo_regla` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasenia` varchar(50) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nombre`, `correo`, `contrasenia`, `imagen`) VALUES
(4, 'rodrigo', 'rodrigo@gmail.com', '123456', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`ficha_id`);

--
-- Indices de la tabla `juega`
--
ALTER TABLE `juega`
  ADD PRIMARY KEY (`juega_id`),
  ADD KEY `fk_usuario_id` (`fk_usuario_id`),
  ADD KEY `fk_partida_id` (`fk_partida_id`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`jugador_id`),
  ADD KEY `fk_partida_id` (`fk_partida_id`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`partida_id`),
  ADD KEY `fk_usuario_id` (`fk_usuario_id`);

--
-- Indices de la tabla `recinto`
--
ALTER TABLE `recinto`
  ADD PRIMARY KEY (`recinto_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ficha`
--
ALTER TABLE `ficha`
  MODIFY `ficha_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `juega`
--
ALTER TABLE `juega`
  MODIFY `juega_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `jugador_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partida_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `recinto`
--
ALTER TABLE `recinto`
  MODIFY `recinto_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `juega`
--
ALTER TABLE `juega`
  ADD CONSTRAINT `juega_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuario` (`usuario_id`),
  ADD CONSTRAINT `juega_ibfk_2` FOREIGN KEY (`fk_partida_id`) REFERENCES `partida` (`partida_id`);

--
-- Filtros para la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD CONSTRAINT `jugadores_ibfk_1` FOREIGN KEY (`fk_partida_id`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `partida_ibfk_1` FOREIGN KEY (`fk_usuario_id`) REFERENCES `usuario` (`usuario_id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
