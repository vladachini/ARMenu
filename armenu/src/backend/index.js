const pool = require("./db");
const express = require("express");
const cors = require("cors");
const { app, PORT } = require("./server");

app.use(express.json()); //req.body
app.use(cors());

app.use('/images', express.static('public/images'));

// Route to get all restaurants
app.post('/restaurants', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Restaurants');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

// Fetch menus for a specific restaurant
app.get('/restaurants/:restaurantId/menus', async (req, res) => {
  const { restaurantId } = req.params;
  try {
      const result = await pool.query('SELECT * FROM Menus WHERE restaurant_id = $1', [restaurantId]);
      res.json(result.rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});

// Fetch food items for a specific menu
app.get('/menus/:menuId/items', async (req, res) => {
  const { menuId } = req.params;
  try {
      const result = await pool.query('SELECT * FROM MenuItems WHERE menu_id = $1', [menuId]);
      res.json(result.rows);
  } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });