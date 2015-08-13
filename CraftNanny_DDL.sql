-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 12, 2015 at 09:24 PM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `base_logger`
--

-- --------------------------------------------------------

--
-- Table structure for table `energy_storage`
--

CREATE TABLE IF NOT EXISTS `energy_storage` (
  `energy_id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `computer_id` int(11) NOT NULL,
  `bat_name` varchar(50) NOT NULL,
  `energy_type` varchar(10) NOT NULL,
  `percent` varchar(10) NOT NULL,
  PRIMARY KEY (`energy_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `record_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `ign` varchar(50) NOT NULL,
  `event` int(11) NOT NULL,
  `discription` varchar(100) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `token` varchar(100) NOT NULL,
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6499 ;

-- --------------------------------------------------------

--
-- Table structure for table `redstone_controls`
--

CREATE TABLE IF NOT EXISTS `redstone_controls` (
  `module_pk` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `computer_id` int(11) NOT NULL,
  `top` tinyint(1) NOT NULL DEFAULT '0',
  `bottom` tinyint(1) NOT NULL DEFAULT '0',
  `back` tinyint(1) NOT NULL DEFAULT '0',
  `front` tinyint(1) NOT NULL DEFAULT '0',
  `left_side` tinyint(1) NOT NULL DEFAULT '0',
  `right_side` tinyint(1) NOT NULL DEFAULT '0',
  `top_name` varchar(100) NOT NULL DEFAULT 'Top',
  `bottom_name` varchar(100) NOT NULL DEFAULT 'Bottom',
  `front_name` varchar(100) NOT NULL DEFAULT 'Front',
  `back_name` varchar(100) NOT NULL DEFAULT 'Back',
  `left_name` varchar(100) NOT NULL DEFAULT 'Left',
  `right_name` varchar(100) NOT NULL DEFAULT 'Right',
  `top_input` tinyint(1) NOT NULL,
  `bottom_input` tinyint(1) NOT NULL,
  `front_input` tinyint(1) NOT NULL,
  `back_input` tinyint(1) NOT NULL,
  `left_input` tinyint(1) NOT NULL,
  `right_input` tinyint(1) NOT NULL,
  PRIMARY KEY (`module_pk`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

-- --------------------------------------------------------

--
-- Table structure for table `tanks`
--

CREATE TABLE IF NOT EXISTS `tanks` (
  `tank_id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `tank_name` varchar(50) NOT NULL,
  `fluid_type` varchar(50) NOT NULL,
  `percent` varchar(10) NOT NULL,
  PRIMARY KEY (`tank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE IF NOT EXISTS `tokens` (
  `token_id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `computer_id` int(11) NOT NULL,
  `computer_name` varchar(100) NOT NULL,
  `last_seen` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `module_type` varchar(11) NOT NULL,
  PRIMARY KEY (`token_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=259 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_pk` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `last_seen` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`user_pk`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
