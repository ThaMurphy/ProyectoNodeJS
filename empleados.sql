-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2022 a las 05:55:13
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(15) NOT NULL,
  `emp_last_name` varchar(30) NOT NULL,
  `emp_phone` int(10) DEFAULT NULL,
  `emp_email` varchar(100) NOT NULL,
  `emp_direction` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`emp_id`, `emp_name`, `emp_last_name`, `emp_phone`, `emp_email`, `emp_direction`) VALUES
(133, 'Manuel', 'Pacal', 2147483647, 'PascalMan@gmail.com', 'Av. Pie de la cuesta 445'),
(143, 'Edgar', 'Pavon', 44270498, 'pavonedgar@mail.com', 'Av. de la luz 134'),
(345, 'Jesscia', 'Mali Ramirez', 2147483647, 'JessicaMali@mail.com', '5 de febrero 556'),
(628, 'Pedro', 'Pica Metal', 2147483647, 'PedroMetal@mail.com', 'Desarrollo San pablo 555'),
(667, 'Isaac', 'Newton', 2147483647, 'IsaccN@gmail.com', 'Av. Sombrerete 563'),
(998, 'Kmonito', 'Johnson', 2147483647, 'Kmonote@outlook.com', 'Calle Guadalarajara 345'),
(999, 'Dilan', 'Mathew', 442678923, 'Dial33@gmail.com', 'Pantheon Griego');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`emp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
