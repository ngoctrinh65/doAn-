-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2024 at 03:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webbanhang`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `user_id`) VALUES
(15, 1),
(2, 2),
(85, 14);

-- --------------------------------------------------------

--
-- Table structure for table `cart_item`
--

CREATE TABLE `cart_item` (
  `id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart_item`
--

INSERT INTO `cart_item` (`id`, `quantity`, `cart_id`, `product_id`) VALUES
(79, 2, 15, 3),
(91, 2, 85, 2);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `is_home`, `name`) VALUES
(1, 1, 'Dành cho nữ'),
(2, 1, 'Dành cho nam'),
(3, 1, 'Bộ sưu tập');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` bigint(20) NOT NULL,
  `create_at` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `subject_name` varchar(255) DEFAULT NULL,
  `update_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `line_product`
--

CREATE TABLE `line_product` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `line_product`
--

INSERT INTO `line_product` (`id`, `is_home`, `name`, `category_id`) VALUES
(1, 1, 'N°5', 1),
(2, 1, 'Coco Mademoiselle', 1),
(3, 1, 'Gabrielle CHANEL', 1),
(4, 1, 'Cristalle', 1),
(5, 1, 'Bleu de CHANEL', 2),
(6, 1, 'Allure Homme Sport', 2),
(8, 1, 'COCO MADEMOISELLE SET', 3),
(9, 1, 'Chance Eau Tendre', 1),
(10, 1, 'Allure Sensuelle', 1),
(12, 1, 'Chance Eau Vive', 1),
(13, 1, 'Pour Monsieur', 2),
(14, 1, 'Chance Eau Fraîche', 1),
(15, 1, 'Chance', 1),
(16, 1, 'Allure Homme Sport Eau Extrême', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` bigint(20) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `price`, `order_id`, `product_id`, `quantity`) VALUES
(5, 15523, 2, 3, 4),
(6, 15523, 2, 4, 1),
(7, 16340, 4, 5, 1),
(8, 15523, 4, 3, 15),
(9, 15523, 4, 6, 2),
(10, 15523, 4, 2, 1),
(11, 15523, 4, 3, 3),
(12, 15523, 5, 2, 1),
(13, 16340, 5, 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `total_money` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL,
  `position` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `address`, `email`, `fullname`, `note`, `order_date`, `phone_number`, `status`, `total_money`, `user_id`, `location`, `position`) VALUES
(2, '2 Đ. Hồ Xuân Hương, Phường 14, Bình Thạnh, Thành phố Hồ Chí Minh', '123@gmail.com', 'âs', 'Giao hàng tiêu chuẩn', '2024-05-31', '4331544321', 0, 77615, 1, NULL, NULL),
(3, '495/2 Tô Hiến Thành, Quận 10, TP. HCM', 'zxc@gmail.com', 'âs', 'Giao hàng tiêu chuẩn', '2024-05-31', '4331544321', 1, 77615, 14, NULL, NULL),
(4, '297/18 Hậu Giang, Quận 6, TP. HCM', 'zxc@gmail.com', 'zxc', 'Giao hàng nhanh', '2024-06-01', '5476437698', 0, 342325, 14, '[{\"lat\":10.839,\"lng\":106.78252},{\"lat\":10.83907,\"lng\":106.78259},{\"lat\":10.83916,\"lng\":106.78205},{\"lat\":10.84057,\"lng\":106.78141},{\"lat\":10.84076,\"lng\":106.78152},{\"lat\":10.84448,\"lng\":106.78124},{\"lat\":10.84895,\"lng\":106.77434},{\"lat\":10.84966,\"lng\":106.77342},{\"lat\":10.84969,\"lng\":106.77154},{\"lat\":10.84982,\"lng\":106.76787}]', 9),
(5, '495/2 Tô Hiến Thành, Quận 10, TP. HCM', 'zxc@gmail.com', 'dsf', 'Giao hàng tiêu chuẩn', '2024-06-01', '6756785645', 0, 64553, 14, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL,
  `deleted` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` bigint(20) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL,
  `quantity` bigint(20) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `line_id` bigint(20) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `deleted`, `description`, `discount`, `price`, `quantity`, `thumbnail`, `title`, `line_id`, `created_at`, `updated_at`) VALUES
(1, 0, 'sản phẩm\nN°5, mùi hương của người phụ nữ. Đóa hoa rực rỡ và ngát hương hòa quyện cùng nốt aldehyde, gói gọn trong lọ thủy tinh có thiết kế tối giản mang tính biểu tượng. Một mùi hương huyền thoại và bất tận.\n\nthành phần\nEau de Parfum lấy cảm hứng từ h', 5, 13340, 67, 'N5(1).jpg', 'EAU DE PARFUM DẠNG XỊT', 1, '2024-04-10', '2024-04-10'),
(2, 0, 'sản phẩm\nN°5, mùi hương của người phụ nữ. Đóa hoa rực rỡ và ngát hương hòa quyện cùng nốt aldehyde, gói gọn trong lọ thủy tinh có thiết kế tối giản mang tính biểu tượng. Một mùi hương huyền thoại và bất tận.\n\nthành phần\nEau de Parfum lấy cảm hứng từ h', 16, 1340, 0, 'N5(2).jpg', 'EAU DE PARFUM DẠNG XỊT\n', NULL, '2024-04-10', '2024-04-10'),
(3, 0, 'sản phẩm\r\nN°5 L’EAU chính là phiên bản N°5 của thời hiện tại. Một đoá hoa rực rỡ trừu tượng mang tinh thần hiện đại và tươi mới. N°5 L’EAU tôn vinh sự tối giản qua chính diện mạo của nó. Biểu tượng chai nước hoa kinh điển được dập nổi trên hộp bìa cứng. B', 5, 16340, 67, 'N5(3).jpg', 'EAU DE TOILETTE DẠNG XỊT', 1, '2024-04-10', '2024-04-10'),
(4, 0, 'sản phẩm\r\nN°5, mùi hương của sự nữ tính.\r\nEau de Toilette là một phiên bản sôi nổi và rực rỡ hơn so với phiên bản đầu tiên được ra mắt vào năm 1921 bởi Gabrielle Chanel. Một mùi hương ấm áp và tươi sáng, được đặt trong một thiết kế chai dạng xịt với phần ', 5, 16340, 67, 'N5(4).jpg', 'EAU DE TOILETTE DẠNG XỊT', 1, '2024-04-10', '2024-04-10'),
(5, 0, 'sản phẩm\r\nMùa lễ hội này, CHANEL đã sáng tạo một set quà tặng bao gồm nước hoa N°5 Eau de Parfum và Dầu dưỡng thể dạng xịt N°5 The Body Oil, trong thiết kế độc quyền gợi nên dáng hình chai nước hoa mang tính biểu tượng. Một chu trình mùi hương sang trọng ', 0, 16340, 67, 'N5(5).jpg', 'SET NƯỚC HOA EAU DE PARFUM 50 ML VÀ DẦU DƯỠNG THỂ DẠNG XỊT SPRAY BODY OIL 100 ML', 1, '2024-04-10', '2024-04-10'),
(6, 0, 'sản phẩm\r\nN°5, mùi hương của người phụ nữ. Một đóa hoa aldehyde rực rỡ. Một mùi hương huyền thoại và bất tận gói gọn trong thiết kế chai xịt bỏ túi, có thể dễ dàng thay lõi, sẵn sàng theo bạn đi bất cứ đâu.\r\n\r\nthành phần\r\nEau de Parfum lấy cảm hứng từ hươ', 5, 16340, 67, 'N5(6).jpg', 'EAU DE PARFUM DẠNG TWIST AND SPRAY', 1, '2024-04-10', '2024-04-10'),
(7, 0, 'sản phẩm\nN°5, mùi hương của người phụ nữ. Một đóa hoa aldehyde rực rỡ. Một mùi hương huyền thoại và bất tận gói gọn trong thiết kế chai xịt bỏ túi, có thể dễ dàng thay lõi, sẵn sàng theo bạn đi bất cứ đâu.\n\nthành phần\nEau de Parfum lấy cảm hứng từ hươ', 5, 16340, 67, 'N5(7).jpg', 'NƯỚC HOA CHO TÓC', 1, '2024-04-10', '2024-04-10'),
(8, 0, 'sản phẩm\nKhúc ca tôn vinh sự tự do nam tính được thể hiện trong một mùi hương gỗ thơm quyến rũ và kinh điển, chứa bên trong thiết kế chai màu xanh đầy bí ẩn.\nTinh thần quyết đoán của BLEU DE CHANEL được thể hiện qua dòng Eau de Parfum.\n\nthành phần\nBL', 5, 16340, 67, 'Bleu-de-CHANEL(1).webp', 'EAU DE PARFUM DẠNG XỊT', 5, '2024-04-10', '2024-04-10'),
(9, 0, 'sản phẩm\nN°5, mùi hương của người phụ nữ. Một đóa hoa aldehyde rực rỡ. Một mùi hương huyền thoại và bất tận gói gọn trong thiết kế chai xịt bỏ túi, có thể dễ dàng thay lõi, sẵn sàng theo bạn đi bất cứ đâu.\n\nthành phần\nEau de Parfum lấy cảm hứng từ hươ', 53, 11000, 80, 'N5(8).jpg', 'NƯỚC HOA CHO TÓC', 1, '2024-04-10', '2024-04-10'),
(10, 0, 'sản phẩm\r\nCOCO MADEMOISELLE. Mùi hương của người phụ nữ táo bạo và tự do. Hương nước hoa hổ phách đầy nữ tính với những nốt hương tươi mát đầy bất ngờ.\r\n\r\nthành phần\r\nCOCO MADEMOISELLE Eau de Parfum là hương nước hoa hổ phách, một mùi hương sống động và b', 53, 15000, 53, 'Coco-Mademoiselle(1).webp', 'EAU DE PARFUM DẠNG XỊT', 2, '2024-04-10', '2024-04-10'),
(11, 0, 'sản phẩm\r\nSản phẩm thiết yếu COCO MADEMOISELLE, một bộ sản phẩm độc quyền kết hợp 2 sáng tạo không thể thiếu trong cùng dòng sản phẩm: nước hoa COCO MADEMOISELLE Eau de Parfum 100 ml và dầu dưỡng thể COCO MADEMOISELLE The Body Oil 200 ml.\r\n\r\nĐược trang tr', 55, 15000, 53, 'Coco-Mademoiselle(3).webp', 'BỘ SẢN PHẨM THIẾT YẾU EAU DE PARFUM 100 ML VÀ THE BODY OIL 200 ML', 8, '2024-04-10', '2024-04-10'),
(12, 0, 'sản phẩm\r\nCOCO MADEMOISELLE Eau de Parfum 50 ml, ROUGE COCO BAUME Dreamy White và LE VERNIS Ballerina trong cùng một túi đựng bộ trang điểm độc quyền. 3 sản phẩm thiết yếu cho phong cách tự nhiên đặc trưng. Tái sử dụng túi đựng bộ trang điểm tinh tế và th', 55, 15000, 53, 'Coco-Mademoiselle(4).webp', 'TÚI ĐỒ TRANG ĐIỂM PHONG CÁCH TỰ NHIÊN: EAU DE PARFUM 50 ML, ROUGE COCO BAUME DREAMY WHITE, LE VERNIS BALLERINA', 8, '2024-04-10', '2024-04-10'),
(13, 0, 'sản phẩm\r\nCOCO MADEMOISELLE Eau de Parfum Intense là mùi hương của người phụ nữ tự do và quyến rũ. Một hương thơm cá tính với những nốt hương gỗ và hổ phách đậm chất phương Đông: gợi cảm, sâu thẳm, và đầy cuốn hút.\r\n\r\nthành phần\r\nCOCO MADEMOISELLE Eau de ', 55, 15000, 53, 'Coco-Mademoiselle(2).webp', 'EAU DE PARFUM INTENSE DẠNG XỊT\r\n', 2, '2024-04-10', '2024-04-10'),
(14, 0, 'sản phẩm\r\nCOCO MADEMOISELLE Eau de Parfum Intense là mùi hương của người phụ nữ tự do và quyến rũ. Một hương thơm cá tính với những nốt hương gỗ và hổ phách đậm chất phương Đông: gợi cảm, sâu thẳm, và đầy cuốn hút.\r\n\r\nthành phần\r\nCOCO MADEMOISELLE Eau de ', 55, 15000, 53, 'Coco-Mademoiselle(6).webp', 'EAU DE TOILETTE DẠNG XỊT', 2, '2024-04-10', '2024-04-10'),
(15, 0, 'sản phẩm\r\nMùa lễ hội này, CHANEL đã tạo ra một thiết kế hộp đựng phiên bản giới hạn màu ngọc trai và vàng ánh kim, mở ra là chai COCO MADEMOISELLE Eau de Parfum thanh lịch.\r\n\r\nthành phần\r\nCOCO MADEMOISELLE Eau de Parfum là một mùi hương hổ phách-rạng rỡ v', 55, 15000, 53, 'Coco-Mademoiselle(5).webp', 'PHIÊN BẢN GIỚI HẠN EAU DE PARFUM 100 ML', 2, '2024-04-10', '2024-04-10'),
(16, 0, 'sản phẩm\r\nMùa lễ hội này, CHANEL đã sáng tạo bộ sản phẩm nước hoa COCO MADEMOISELLE Eau de Parfum và dầu dưỡng toàn thân COCO MADEMOISELLE The Body Oil, trong thiết kế chai độc quyền gợi lại dáng hình của một chai nước hoa mang tính biểu tượng.\r\n\r\nMột chu', 80, 15000, 53, 'Coco-Mademoiselle(7).webp', 'SET NƯỚC HOA EAU DE PARFUM 50 ML VÀ DẦU DƯỠNG TOÀN THÂN DẠNG XỊT 100 ML', 8, '2024-04-10', '2024-04-10'),
(17, 0, 'sản phẩm\r\nTheo Gabrielle Chanel, đây là một phiên bản nam tính vượt trội. Một mùi hương chypre tươi mát vô tận. Lọ nước hoa được bao phủ bởi màu xám của vải fla-nen: thanh lịch, trang trọng, nền nã.\r\nĐây là loại nước hoa dành cho nam duy nhất được tạo nên', 54, 63400, 67, 'Pour-Monsieur.webp', 'EAU DE TOILETTE DẠNG XỊT', 13, '2024-04-10', '2024-04-10'),
(18, 0, 'sản phẩm\r\nMột mùi hương hoa cỏ gợi cảm và rực rỡ được chế tác bởi Olivier Polge, nhà chế tác nước hoa của CHANEL.\r\nLấy cảm hứng từ Gabrielle Chanel, GABRIELLE CHANEL ESSENCE đại diện cho người phụ nữ luôn biết mình cần gì và chọn trở thành người phụ nữ mà', 57, 10000, 85, 'Gabrielle-CHANEL(1).webp', 'ESSENCE EAU DE PARFUM DẠNG XỊT', 3, '2024-04-10', '2024-04-10'),
(19, 0, 'sản phẩm\r\nMột mùi hương hoa cỏ gợi cảm và rực rỡ được chế tác bởi Olivier Polge, nhà chế tác nước hoa của CHANEL.\r\nLấy cảm hứng từ Gabrielle Chanel, GABRIELLE CHANEL ESSENCE đại diện cho người phụ nữ luôn biết mình cần gì và chọn trở thành người phụ nữ mà', 57, 10000, 85, 'Gabrielle-CHANEL(2).webp', 'EAU DE PARFUM DẠNG XỊT', 3, '2024-04-10', '2024-04-10'),
(20, 0, 'sản phẩm\r\nMột mùi hương hoa cỏ gợi cảm và rực rỡ được chế tác bởi Olivier Polge, nhà chế tác nước hoa của CHANEL.\r\nLấy cảm hứng từ Gabrielle Chanel, GABRIELLE CHANEL ESSENCE đại diện cho người phụ nữ luôn biết mình cần gì và chọn trở thành người phụ nữ mà', 57, 10700, 85, 'Gabrielle-CHANEL(3).webp', 'EXTRAIT DẠNG XỊT', 3, '2024-04-10', '2024-04-10'),
(21, 0, 'sản phẩm\r\nTựa như hơi thở sảng khoái và tràn đầy sinh lực nơi vùng quê yên bình, một cảm giác thanh lịch và tinh khiết tuyệt đối. Một hương hoa tươi mát với sự cân bằng giữa nét cá tính và sự dịu dàng. Mạnh mẽ và nhẹ nhàng. Tự nhiên nhưng tinh tế.\r\n\r\nthàn', 57, 10700, 85, 'Cristalle(1).webp', 'EAU DE PARFUM DẠNG XỊT', 4, '2024-04-10', '2024-04-10'),
(22, 0, 'sản phẩm\r\nTựa như hơi thở sảng khoái và tràn đầy sinh lực nơi vùng quê yên bình, một cảm giác thanh lịch và tinh khiết tuyệt đối. Một hương hoa tươi mát với sự cân bằng giữa nét cá tính và sự dịu dàng. Mạnh mẽ và nhẹ nhàng. Tự nhiên nhưng tinh tế.\r\n\r\nthàn', 57, 10700, 85, 'Cristalle(2).webp', 'EAU DE PARFUM DẠNG XỊT', 4, '2024-04-10', '2024-04-10');

-- --------------------------------------------------------

--
-- Table structure for table `product_size`
--

CREATE TABLE `product_size` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `size_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'khách hàng');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `id` bigint(20) NOT NULL,
  `quantity_sold` int(11) NOT NULL,
  `sale_date` date DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `sizes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `is_home`, `sizes`) VALUES
(1, 1, 100),
(2, 1, 50),
(3, 1, 35);

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL,
  `create_at` date DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `address`, `email`, `fullname`, `password`, `username`, `role_id`) VALUES
(1, 'dsfsdf', '123@gmail.com', 'dsfsd', '123', 'sdf', 2),
(2, '233333', '5534', 'dsfsd345', 'sdf', 'sdf', 2),
(14, 'zxc', 'zxc@gmail.com', 'zxc', 'zxc', NULL, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKl70asp4l4w0jmbm1tqyofho4o` (`user_id`);

--
-- Indexes for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  ADD KEY `FKqkqmvkmbtiaqn2nfqf25ymfs2` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKiygpxsm5v7pxfbn4hmrk6skhd` (`product_id`);

--
-- Indexes for table `line_product`
--
ALTER TABLE `line_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5tk14xcc5ssws52l0qc0j1kex` (`category_id`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfxkmvpbfxqect54pd7slj4ll9` (`order_id`),
  ADD KEY `FK9iu7g1xs6c3u7n3ryo9yv2tyd` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKla4fdw120rv45702usvvkqc3w` (`line_id`);

--
-- Indexes for table `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9qjgp0xvl5jfetdt683i7wqwr` (`product_id`),
  ADD KEY `FK1yl8bbmokvonm64131xlscnci` (`size_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7psqmmgealuglinly88ceyy7w` (`product_id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `line_product`
--
ALTER TABLE `line_product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  ADD CONSTRAINT `FKqkqmvkmbtiaqn2nfqf25ymfs2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `FKiygpxsm5v7pxfbn4hmrk6skhd` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `line_product`
--
ALTER TABLE `line_product`
  ADD CONSTRAINT `FK5tk14xcc5ssws52l0qc0j1kex` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `FK9iu7g1xs6c3u7n3ryo9yv2tyd` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FKfxkmvpbfxqect54pd7slj4ll9` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FKla4fdw120rv45702usvvkqc3w` FOREIGN KEY (`line_id`) REFERENCES `line_product` (`id`);

--
-- Constraints for table `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `FK1yl8bbmokvonm64131xlscnci` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `FK9qjgp0xvl5jfetdt683i7wqwr` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `sale`
--
ALTER TABLE `sale`
  ADD CONSTRAINT `FK7psqmmgealuglinly88ceyy7w` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
