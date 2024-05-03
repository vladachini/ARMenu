CREATE TABLE Restaurants (
    restaurant_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location TEXT NOT NULL,
    description TEXT,
    logo_url TEXT  -- URL to the restaurant's logo
);
-- Create the Menus table
CREATE TABLE Menus (
    menu_id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id)
);

-- Create the Food Items table
CREATE TABLE MenuItems (
    item_id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    FOREIGN KEY (menu_id) REFERENCES Menus(menu_id)
);

-- CREATE TABLE MenuItems (
--     item_id SERIAL PRIMARY KEY,
--     restaurant_id INTEGER NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     price DECIMAL(10, 2),
--     image_url TEXT,
--     FOREIGN KEY (restaurant_id) REFERENCES Restaurants(restaurant_id)
-- );