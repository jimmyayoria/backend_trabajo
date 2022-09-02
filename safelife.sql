-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-09-2022 a las 04:52:57
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `safelife`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `rango` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `id_especialidad` int(11) DEFAULT NULL,
  `estado` char(1) DEFAULT NULL,
  `monto` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `id_usuario`, `rango`, `fecha`, `id_medico`, `id_especialidad`, `estado`, `monto`) VALUES
(2, 1, '16:30', '2022-08-18', 2, 2, '1', '80.00'),
(8, 1, '17:10', '2022-08-04', 1, 1, '1', '50.00'),
(9, 1, '17:30', '2022-08-12', 3, 1, '1', '50.00'),
(11, 15, '17:30', '2022-08-29', 3, 1, '1', '50.00'),
(12, 15, '17:30', '2022-08-12', 2, 2, '1', '50.00'),
(13, 15, '11:30', '2022-08-31', 5, 4, '1', '50.00'),
(15, 16, '20:30', '2022-09-08', 6, 4, '1', '50.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinica`
--

CREATE TABLE `clinica` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `aforo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`id`, `nombre`) VALUES
(1, 'oncologia'),
(2, 'gastroenterologia'),
(3, 'ginecologia'),
(4, 'pediatria'),
(5, 'oftalmologia'),
(6, 'traumatologia'),
(7, 'otorrinolaringologia'),
(8, 'odontologia'),
(9, 'dermatologia'),
(10, 'medicina interna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `id` int(11) NOT NULL,
  `rango` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `dni` char(8) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `cmp` varchar(50) NOT NULL,
  `sede` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`id`, `nombre`, `apellido`, `dni`, `imagen`, `cmp`, `sede`) VALUES
(1, 'Jacqueline', 'Abad Nuñez', '78541236', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/1005569.jpg', '', ''),
(2, 'Segundo Carlos', 'Abanto Argomedo', '47112235', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/8712.jpg', '', ''),
(3, 'Marcela', 'Abarca Benavente', '36214587', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/5001.jpg', '', ''),
(4, 'Arturo', 'Aguilar Maldonado', '65412389', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/1005108.jpg', '', ''),
(5, 'Sergio Ricardo', 'Aguilar Romero', '54872365', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/8083.jpg', '', ''),
(6, 'Carlos Roberto', 'Aguirre Masson', '87542398', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/1005101.jpg', '', ''),
(7, 'Cesar Anibal', 'Alarcon Olivera', '54123658', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/5028.jpg', '', ''),
(8, 'Jose Samuel', 'Alarcon Vera', '87452136', 'https://www.clinicainternacional.com.pe/staff-medico-img/Foto/8387.jpg', '', ''),
(9, 'Oscar Alfredo', 'Aller Fernandini', '45877263', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/1000637.jpg', '', ''),
(10, 'Ricardo Enrique', 'Aliendres Galindo', '45689325', 'https://sabrmeamundociprod.blob.core.windows.net/bscbrmeamundociprod/Foto/1004966.jpg', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicoclinica`
--

CREATE TABLE `medicoclinica` (
  `id` int(11) NOT NULL,
  `id_clinica` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicoespecialidad`
--

CREATE TABLE `medicoespecialidad` (
  `id` int(11) NOT NULL,
  `id_especialidad` int(11) DEFAULT NULL,
  `id_medico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medicoespecialidad`
--

INSERT INTO `medicoespecialidad` (`id`, `id_especialidad`, `id_medico`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 1, 3),
(4, 3, 4),
(5, 4, 5),
(6, 4, 6),
(7, 4, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicohorario`
--

CREATE TABLE `medicohorario` (
  `id` int(11) NOT NULL,
  `id_medico` int(11) DEFAULT NULL,
  `id_horario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombres` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `dni` varchar(8) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `edad` varchar(3) DEFAULT NULL,
  `correoElectronico` varchar(200) DEFAULT NULL,
  `contrasenia` varchar(150) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `distrito` varchar(100) DEFAULT NULL,
  `provincia` varchar(100) DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombres`, `apellidos`, `dni`, `telefono`, `edad`, `correoElectronico`, `contrasenia`, `direccion`, `distrito`, `provincia`, `departamento`) VALUES
(1, 'miguel', 'guevara', '76548923', '123456', '26', 'mguevaraa@gmail.com', '1234', 'mz f lote 20 ', 'Trujillo', 'Trujillo', 'La Libertad'),
(2, 'miguel', 'guevara', '76548923', '123456', '26', 'mguevaraa@gmail.com', '1234', 'mz f lote 20 ', 'Trujillo', 'Trujillo', 'La Libertad'),
(3, 'Miguel Angel', 'Vasquez Tanata', '48271153', '7654365', '22', 'prueba@gmail.com', 'asdasd123123', 'Pasaje 14 de Julio #45', 'La Esperanza', 'qweqwe', 'La Libertad'),
(4, 'test', 'test', '48271153', '3312224', '23', 'Miguelguevaraalejandro@outlook.com', '1234', 'Bartolome de las casas #411', 'La Esperanza', 'Trujillo', 'La Libertad'),
(5, 'Miguel Angel', '123123eqwe', '48271154', '7654365', '23', 'prueba@gmail.com', '123', 'Pasaje 14 de Julio #45', 'La Esperanza', 'Trujillo', 'La Libertad'),
(6, 'test', 'test', '34123687', '445215', '33', 'yovana241@hotmail.com', '1234', 'Calle San Martín #155', 'Trujillo', 'Trujillo', 'La Libertad'),
(7, 'jose', 'Casana', '78541255', '945267159', '12', 'miguelguevaraalejandro@gmail.com', '12345', 'Av. Nicolás de Piérola #457', 'Florencia de Mora', 'qweqwe', 'eqwe'),
(8, 'test', 'test', '48271152', '7654365', '32', 'miguelguevaraalejandro@gmail.com', '12345', 'Av. Nicolás de Piérola #457', 'Florencia de Mora', 'Trujillo', 'La Libertad'),
(9, 'jose', 'test', '48271154', '945267159', '34', 'prueba@gmail.com', '1234', 'Calle San Martín #155', 'La Esperanza', 'Trujillo', 'La Libertad'),
(10, 'test', 'test', '48271152', '7654365', '24', 'prueba@gmail.com', '43213', 'Av. Nicolás de Piérola #457', 'El Porvenir', 'qweqwe', 'qweqwe'),
(11, 'test', 'test', '34123687', '985214362', '32', 'Miguelguevaraalejandro@outlook.com', '123456', 'Pasaje 14 de Julio #45', 'La Esperanza', 'Trujillo', 'La Libertad'),
(12, 'test', 'test', '48271152', '782541', '43', 'prueba@gmail.com', '12345', 'Av. Nicolás de Piérola #457', 'Florencia de Mora', 'Trujillo', 'La Libertad'),
(13, 'Miguel Angel', 'Guevara', '48271153', '3312224', '22', 'Miguelguevaraalejandro12@outlook.com', '12345', 'Pasaje 14 de Julio #45', 'La Esperanza', 'Trujillo', 'La Libertad'),
(14, 'Miguel Angel', 'Guevara Alejandro', '48271152', '782540', '23', 'Miguelguevaraalejandro123@outlook.com', '12345', 'Av. Nicolás de Piérola #457', 'La Esperanza', 'Trujillo', 'La Libertad'),
(15, 'Jorge', 'Guevara Alejandro', '48271151', '945267159', '41', 'prueba1@gmail.com', '12345', 'Calle San Martín #155', 'Victor Larco Herrera', 'Trujillo', 'La Libertad'),
(16, 'Miguel Angel', 'Guevara Alejandro', '48271153', '945267159', '25', 'Miguelguevaraalejandro1234@outlook.com', '12345', 'Av. Nicolás de Piérola #457', 'Trujillo', 'Trujillo', 'La Libertad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_medico` (`id_medico`),
  ADD KEY `id_especialidad` (`id_especialidad`);

--
-- Indices de la tabla `clinica`
--
ALTER TABLE `clinica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `medicoclinica`
--
ALTER TABLE `medicoclinica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_clinica` (`id_clinica`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `medicoespecialidad`
--
ALTER TABLE `medicoespecialidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_especialidad` (`id_especialidad`),
  ADD KEY `id_medico` (`id_medico`);

--
-- Indices de la tabla `medicohorario`
--
ALTER TABLE `medicohorario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_medico` (`id_medico`),
  ADD KEY `id_horario` (`id_horario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `clinica`
--
ALTER TABLE `clinica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `horario`
--
ALTER TABLE `horario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medico`
--
ALTER TABLE `medico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `medicoclinica`
--
ALTER TABLE `medicoclinica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medicoespecialidad`
--
ALTER TABLE `medicoespecialidad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `medicohorario`
--
ALTER TABLE `medicohorario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `Cita_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `Cita_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`),
  ADD CONSTRAINT `Cita_ibfk_3` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id`);

--
-- Filtros para la tabla `medicoclinica`
--
ALTER TABLE `medicoclinica`
  ADD CONSTRAINT `MedicoClinica_ibfk_1` FOREIGN KEY (`id_clinica`) REFERENCES `clinica` (`id`),
  ADD CONSTRAINT `MedicoClinica_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`);

--
-- Filtros para la tabla `medicoespecialidad`
--
ALTER TABLE `medicoespecialidad`
  ADD CONSTRAINT `MedicoEspecialidad_ibfk_1` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id`),
  ADD CONSTRAINT `MedicoEspecialidad_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`);

--
-- Filtros para la tabla `medicohorario`
--
ALTER TABLE `medicohorario`
  ADD CONSTRAINT `MedicoHorario_ibfk_1` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id`),
  ADD CONSTRAINT `MedicoHorario_ibfk_2` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
