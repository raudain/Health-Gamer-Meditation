CREATE TABLE `videos` (
  `static_thumbnail` TINYTEXT NOT NULL,
  `link` TINYTEXT NOT NULL,
  `caption` varchar(90) NOT NULL,
  `date` INT(8) NOT NULL,
  `animated_thumbnail` TINYTEXT,
  PRIMARY KEY (`caption`)
);

INSERT INTO `videos` (`static_thumbnail`, `link`, `caption`, `date`, `animated_thumbnail`) VALUES
('https://i.ytimg.com/vi/zM-J9_ddpDA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCqfvjl5m3IIMmHQCvPqxx1N464IQ', 'https://www.youtube.com/watch?v=zM-J9_ddpDA', 'Wrongly BANNED from a Mental Health Discord?', 20200729, 'https://i.ytimg.com/an_webp/zM-J9_ddpDA/mqdefault_6s.webp?du=3000&sqp=CPDVq_wF&rs=AOn4CLDf2USVAeFT2CexyQKyP7JaxAqSbg'),
(2, 'Gaming'),
(3, 'Auto'),
(4, 'Entertainment'),
(5, 'Books');