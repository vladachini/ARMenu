INSERT INTO Restaurants (name, location, description, logo_url)
VALUES ('Moxies', '601 Earl Grey Dr, Kanata', 'Upscale casual dining experience with a bar and patio ', 'http://localhost:3000/images/moxies-logo.png');

INSERT INTO Menus (restaurant_id, title) VALUES
(1,'Food Menu'),
(1,'Drink Menu'),
(1,'Kids Menu'),
(1,'Happy Hour Menu'),
(1,'Dessert Menu');

INSERT INTO MenuItems (menu_id, name, description, price, image_url) VALUES
(1,'Thai Chili Chicken', 'crispy chicken breast, sweet chili sauce, cucumbers, cashews & wontons with spicy mayo', 18, 'http://localhost:3000/images/thai-chili-chicken.jpg'),
(1,'Smashed Avocado Dip', 'fresh smashed guacamole, pico de gallo with fresh cooked taro root & white corn chips', 15.50, null),
(1, 'Tiny Tuna Tacos', '3 tacos with diced ahi tuna in crispy wonton shells, guacamole & sesame soy dipping sauce', 14, null);
