import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
  } from "react-router-dom";
import RestaurantCard from './RestaurantCard';
import RestaurantList from './RestaurantList';
import MenusPage from './MenusPage';
import MenuItemsPage from './MenuItemsPage';
import Header from './Header';

  
  function App() {
	return (
	  <Router>
		<div className="App">
			<Header />
		  <Routes>
			<Route path="/" element={<RestaurantList />} />
			<Route path="/restaurants/:restaurantId/menus" element={<MenusPage />} />
        	<Route path="/menus/:menuId/items" element={<MenuItemsPage />} />
		  </Routes>
		</div>
	  </Router>
	);
  }
  
  export default App;
