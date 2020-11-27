-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 04:39 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medicine`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `medicinename` varchar(250) NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `username`, `medicinename`, `price`) VALUES
(9, '', 'angin', '100 '),
(11, '', 'angin', '100 '),
(12, '', 'angin', '100 '),
(13, '', 'angin', '100 '),
(15, '', 'angin', '100 '),
(16, '', 'angin', '100 '),
(17, '', 'angin', '100 '),
(18, '', 'angin', '100 '),
(19, '', 'Caid ', '.56'),
(20, '', 'Ace', '30'),
(22, '', 'carba', '.57'),
(23, '', 'Ecosprin ', '.59'),
(25, '', 'Bepol ', '20'),
(26, '', 'angin', '100 '),
(27, '', 'carba', '.57'),
(28, '', 'Ecosprin ', '.59'),
(29, '', 'Ace', '30'),
(30, '', 'Caid ', '.56'),
(31, '', 'angin', '100 '),
(32, '', 'angin', '100 '),
(33, '', 'Caid ', '.56'),
(34, '', 'angin', '100 '),
(35, '', 'angin', '100 '),
(36, '', 'Caid ', '.56');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `role`) VALUES
('admin', '123', 0),
('a4', '123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `medicinetable`
--

CREATE TABLE `medicinetable` (
  `id` int(250) NOT NULL,
  `medicinename` varchar(250) NOT NULL,
  `genre` varchar(250) NOT NULL,
  `medicinetype` varchar(250) NOT NULL,
  `vendorname` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `quantity` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicinetable`
--

INSERT INTO `medicinetable` (`id`, `medicinename`, `genre`, `medicinetype`, `vendorname`, `price`, `quantity`) VALUES
(1, 'angin', 'Aspirin', 'liquid', 'Pharmadesh Laboratories Ltd', '100 ', 300),
(2, 'Caid ', 'aspirin', 'solid', 'Jayson Pharma Ltd. ', '.56', 200),
(3, 'carba', 'aspirin', 'solid', 'Squre ', '.57', 30),
(4, 'Bepol ', 'paracitamol', 'solid', ' 	Kemiko Pharmaceuticals Ltd.', '20', 200),
(5, 'Ace', 'paracitamol', 'solid', 'Square Pharmaceuticals Ltd', '30', 200),
(6, 'Ecosprin ', 'aspirin', 'liquid', 'ACME', '.59', 200),
(7, 'Ease', 'paracitamol', 'liquid', 'orbit ', '10', 200);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `name`, `password`, `email`, `address`) VALUES
('a2', 'rakib', '123', 'a@gmail.com', 'kapasia'),
('a3', 'azrin', '123', 'az@gmail.com', 'kapasia'),
('a4', 'azrin sultana', '123', 'az@gmail.com', 'kapasia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicinetable`
--
ALTER TABLE `medicinetable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `medicinetable`
--
ALTER TABLE `medicinetable`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
