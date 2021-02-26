CREATE TABLE `videos` (
  `caption` varchar(90) NOT NULL,
  `date` INT(8) NOT NULL,
  `staticThumbnail` TINYTEXT NOT NULL,
  `animatedThumbnail` TINYTEXT,
  `link` TINYTEXT NOT NULL,
  PRIMARY KEY (`caption`)
);

INSERT INTO `videos` (`link`, `staticThumbnail`, `caption`, `date`, `animatedThumbnail`) VALUES
('https://www.youtube.com/watch?v=zM-J9_ddpDA', 'https://i.ytimg.com/vi/zM-J9_ddpDA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCqfvjl5m3IIMmHQCvPqxx1N464IQ', 'Wrongly BANNED from a Mental Health Discord?', 20200729, 'https://i.ytimg.com/an_webp/zM-J9_ddpDA/mqdefault_6s.webp?du=3000&sqp=CPDVq_wF&rs=AOn4CLDf2USVAeFT2CexyQKyP7JaxAqSbg'),
('https://www.youtube.com/watch?v=zn8vtW7Vaz4&amp;t=110m8s', 'https://i.ytimg.com/vi/zn8vtW7Vaz4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCu-gRmEOWeHWe0z5Cgi0EWJYX_PQ', 'Talking with @Trainwreckstv: Staying Grounded and Focused', 20200822, 'https://i.ytimg.com/an_webp/zn8vtW7Vaz4/mqdefault_6s.webp?du=3000&sqp=CLqYq_wF&rs=AOn4CLCYWxEtICmmIDblagvcy0lv-i0bYg'),
('https://www.youtube.com/watch?v=COlSfNEsPZA&amp;t=110m0s', 'https://i.ytimg.com/vi/COlSfNEsPZA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDCSLdP16OuSe7WoO4QOcXW0p_daA', 'Talking with FerociouslySteph, Controversy &amp; Identity', 20200828, 'https://i.ytimg.com/an_webp/COlSfNEsPZA/mqdefault_6s.webp?du=3000&sqp=CJDSq_wF&rs=AOn4CLA4P8iRjXyXw5h37bnI01Z6j02WQA'),
('https://www.youtube.com/watch?v=IIPTN0qdFVU&amp;t=104m4s', 'https://i.ytimg.com/vi/IIPTN0qdFVU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAr-dWHR3CQk1gcywGfpEMut9HWiQ', 'Pickup Artistry, Dating, &amp; Building Confidence | Dr. K Interview', 20200829, 'https://i.ytimg.com/an_webp/IIPTN0qdFVU/mqdefault_6s.webp?du=3000&sqp=CK-Rq_wF&rs=AOn4CLAgReuY4mPDm1F-GWslfhrZlb_cXw'),
('https://www.youtube.com/watch?v=7-23_WfZ4Lk&amp;t=89m24s', 'https://i.ytimg.com/vi/7-23_WfZ4Lk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBlAXe-jt0WF6zrKfNqecT0QwChXQ', 'Talking With an Actual Incel? | Dr. K Interviews', 20200901, 'https://i.ytimg.com/an_webp/7-23_WfZ4Lk/mqdefault_6s.webp?du=3000&sqp=CI-mq_wF&rs=AOn4CLDeb6Ru0x1hV5ddVTDtjyv_Sh5cqg'),
('https://www.youtube.com/watch?v=sn4ic7ftesw&amp;t=104m23s', 'https://i.ytimg.com/vi/sn4ic7ftesw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBY3j_PCdlJ0XXEUDgVkfxlEj1fAg', 'Talking With penguinz0 | Dr. K Interviews', 20200903, 'https://i.ytimg.com/an_webp/sn4ic7ftesw/mqdefault_6s.webp?du=3000&sqp=CLS9q_wF&rs=AOn4CLA7qOKJtjHKskmPqNqskWO_jh7oJg'),
('http://www.youtube.com/watch?v=sLbDESxRuLI&amp;t=113m55s', 'https://i.ytimg.com/vi/sLbDESxRuLI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAH-ouZnwJZbsvRxP4FtYVn7FzKnw', 'Dr. K Discusses TOXICITY With LoL Pros (ft. Voyboy, Shiphtur, Sanchovies, SirhcEz)', 20200905, 'https://i.ytimg.com/an_webp/sLbDESxRuLI/mqdefault_6s.webp?du=3000&sqp=CMSjq_wF&rs=AOn4CLC93zboENtWR98W9Cnz_nljq0nHDA'),
('https://www.youtube.com/watch?v=EQP5O_mbJho&amp;t=119m40s', 'https://i.ytimg.com/vi/EQP5O_mbJho/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDJx3ZpougdvnmsZwe-50EgbqYJug', 'MAKING SENSE With TrainwrecksTV | Dr. K Interviews', 20200908, 'https://i.ytimg.com/an_webp/EQP5O_mbJho/mqdefault_6s.webp?du=3000&sqp=COTPq_wF&rs=AOn4CLAmitDQwRr4cbmjkO77JsSmnFgwHg'),
('https://www.youtube.com/watch?v=1gz4duPT5CY&amp;t=1h17m40s', 'https://i.ytimg.com/vi/1gz4duPT5CY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBYzFAcKXQRrxUhUnUerbKIYtggcg', 'Overcoming NEGATIVE Self-Talk with ConnorEatsPants | Dr. K Interviews', 20200910, 'https://i.ytimg.com/an_webp/1gz4duPT5CY/mqdefault_6s.webp?du=3000&sqp=CITXq_wF&rs=AOn4CLAEKoD-VmEoqaZv5F35ZoWradq2qg'),
('https://www.youtube.com/watch?v=QSR3P9jayPo', 'https://i.ytimg.com/vi/QSR3P9jayPo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCV4eCtR0uLcBfqMxkqNsJmlhauuQ', 'MOVING FORWARD With the Smash Community (ft. Scar, TKbreezy, Hugs, Jisu, DrPiggy)', 20200912, 'https://i.ytimg.com/an_webp/QSR3P9jayPo/mqdefault_6s.webp?du=3000&sqp=CJy5q_wF&rs=AOn4CLA39X1uX8P4vcy2dQSpda9n3S9SzA'),
('https://www.youtube.com/watch?v=5n6lDNacfk0&amp;t=1h38m4s', 'https://i.ytimg.com/vi/5n6lDNacfk0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBLby3CRlFdCHohOGBGcyyXpGiA2w', 'Conquering SOCIAL ANXIETY ft. Poopernoodle | Dr. K Interviews', 20200915, 'https://i.ytimg.com/an_webp/5n6lDNacfk0/mqdefault_6s.webp?du=3000&sqp=CK-8q_wF&rs=AOn4CLDpTNh-lhvWgnT6VHP0hNV3-Oy0Vw'),
('https://www.youtube.com/watch?v=yGJXaXxGamY&amp;t=1h39m12s', 'https://i.ytimg.com/vi/yGJXaXxGamY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZ-fdUu620i4kPznDZ71tLFIQ2Jw', 'How to Turn Ideas into Action Ft. Pestily  | Dr. K Interviews', 20200919, 'https://i.ytimg.com/an_webp/yGJXaXxGamY/mqdefault_6s.webp?du=3000&sqp=CN7Oq_wF&rs=AOn4CLCjzV2Gm-g1eARWt6QDHqWc-ifXeg'),
('https://www.youtube.com/watch?v=bbQnnAbWBfE&amp;t=1h19m7s', 'https://i.ytimg.com/vi/bbQnnAbWBfE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1OJeSAnVxtlQ9tXvHmM8xnL4G0w', 'LONELINESS: The Danger of Social Isolation | Dr. K Interviews', 20200922, 'https://i.ytimg.com/an_webp/bbQnnAbWBfE/mqdefault_6s.webp?du=3000&sqp=CK2jq_wF&rs=AOn4CLAgOExC2Fqnz2jmCIXU_W_ZwZQN4Q'),
('https://www.youtube.com/watch?v=f80giMf-tKM', 'https://i.ytimg.com/vi/f80giMf-tKM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDyJf9v0-12f0oR_RfHHjVtaKSENQ', 'Mental Health Isn’t Broken, It’s Incomplete', 20200923, 'https://i.ytimg.com/an_webp/f80giMf-tKM/mqdefault_6s.webp?du=3000&sqp=CLLGq_wF&rs=AOn4CLCUYSbp3D3JOY1bZrinNGa7lFxCSw'),
('https://www.youtube.com/watch?v=cXw8cJolE5Y', 'https://i.ytimg.com/vi/cXw8cJolE5Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC2PddPXhTHj6h0EnWXnfvQwWfPxw', 'The more successful your mask, the lonelier you feel', 20200924, 'https://i.ytimg.com/an_webp/cXw8cJolE5Y/mqdefault_6s.webp?du=3000&sqp=CNbSq_wF&rs=AOn4CLChnOTzIDrOqWEk1G5O5ivRNnojzw'),
('https://www.youtube.com/watch?v=_lRLZYri3Zo', 'https://i.ytimg.com/vi/_lRLZYri3Zo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD-n2Mluk0C-Mpjkg5uziV1YzRhaw', 'The Power of "I am Sorry" With HotshotGG', 20200926, 'https://i.ytimg.com/an_webp/_lRLZYri3Zo/mqdefault_6s.webp?du=3000&sqp=CMbRq_wF&rs=AOn4CLAC8i-vneByun6wXZIhv9S8g3wBhA'),
('https://www.youtube.com/watch?v=t-jNwBNXeJY', 'https://i.ytimg.com/vi/t-jNwBNXeJY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBF81Xm1bh42DpSIO8kPRidNpuWdw', 'How Insecurity Breeds Materialism: A Talk With Gross Gore | Dr. K Interviews', 20200929, 'https://i.ytimg.com/an_webp/t-jNwBNXeJY/mqdefault_6s.webp?du=3000&sqp=CO6Tq_wF&rs=AOn4CLBswdSYta_AOErXYp_8Jqt8OXXatg'),
('https://www.youtube.com/watch?v=3V8VJxYHlRA', 'https://i.ytimg.com/vi/3V8VJxYHlRA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1KjT6tPBMW-NyUTxJr5vSkL_gZQ', 'Psychiatrist Explains How Insecure People Use the Internet', 20200930, 'https://i.ytimg.com/an_webp/3V8VJxYHlRA/mqdefault_6s.webp?du=3000&sqp=CKDSq_wF&rs=AOn4CLBADKVp-9SiLudmq8BofqsGR8c_hQ'),
('https://www.youtube.com/watch?v=RkXOnq10G-s&amp;t=1h42m44s', 'https://i.ytimg.com/vi/RkXOnq10G-s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAdWxL4sc8LhhV5X23crBy8Xzoq2A', 'Why People Don’t Like You | Dr. K Interviews', 20201003, 'https://i.ytimg.com/an_webp/RkXOnq10G-s/mqdefault_6s.webp?du=3000&sqp=CJHCq_wF&rs=AOn4CLCxXWcs42vC8F0OFL55zaNvlGoxxQ'),
('https://www.youtube.com/watch?v=kv9p7m1VS6s', 'https://i.ytimg.com/vi/kv9p7m1VS6s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAeA47EHiSxA527RrAvjPjqlxA1VA', 'Psychiatrist Explains Why People Get Stuck in Relationships', 20201005, 'https://i.ytimg.com/an_webp/kv9p7m1VS6s/mqdefault_6s.webp?du=3000&sqp=CM2kq_wF&rs=AOn4CLAudgJrCwIwJx2uazBrjI542qHufg'),
('https://www.youtube.com/watch?v=1e2h-awLC-s', 'https://i.ytimg.com/vi/1e2h-awLC-s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAkWf5Vp96PFHRGE803z9-uV_XJog', 'PSYCHEDELICS: A Conversation With Rick Doblin | Dr. K Interviews', 20201011, 'https://i.ytimg.com/an_webp/1e2h-awLC-s/mqdefault_6s.webp?du=3000&sqp=CJ-4q_wF&rs=AOn4CLCf8AqTeWApHu9y4eKpDBqF2Jseew');
