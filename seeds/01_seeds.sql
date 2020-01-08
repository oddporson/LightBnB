INSERT INTO reservations (guest_id, property_id, start_date, end_date) 
VALUES (1, 1, '2019-11-20', '2019-11-25'),
(2, 2, '2020-01-04', '2019-01-10'),
(3, 3, '2020-02-06', '2020-02-15');


INSERT INTO users (name, email, password)
VALUES ('Rey Skywalkers', 'rey_skywalkers@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Luke Skywalkers', 'luke_skywalkers@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Leia Skywalkers', 'leia_skywalkers@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_space, number_of_bathrooms, number_of_bedrooms, country, street, city, province, postal_code, active)
VALUES (1, 'Bubble Suite', 'description', 'https://www.caribbeanbluebook.com/uploads/blog/original/61942d97f5292f4dc0661a18659825c2.jpg', 'https://a0.muscache.com/im/pictures/33e65e22-a51c-4839-b18d-1c1a3e55818d.jpg?aki_policy=x_large', 235, 1, 1, 1, 'USA', '4949 Southside Lane', 'Los Angeles', 'CA', 90018, true),
(2, 'Treehouse', 'description', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/airbnb-atlanta-treehouse-1532623340.jpg?crop=0.446xw:1.00xh;0.273xw,0&resize=480:*', 'https://metro.co.uk/wp-content/uploads/2017/07/pri_47043365.jpg?quality=80&strip=all', 184, 1, 2, 2, 'Canada', '4310 Yoho Valley Road', 'Golden', 'BC', 'V0A 1H0', true),
(3, 'Bamboo House', 'description', 'https://a0.muscache.com/im/pictures/29099674/7e3509fe_original.jpg?aki_policy=xx_large', 'https://a0.muscache.com/im/pictures/29101243/4b836608_original.jpg?aki_policy=x_large', 264, 1, 2, 3, 'Indonesia', 'Jalan Raya Candi Dasa', 'Bali', 'N/A', '80871', true);


INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 1, 1, 7, 'message'),
(2, 2, 2, 9, 'message'),
(3, 3, 3, 8, 'message');


