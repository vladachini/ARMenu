import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RestaurantCard.css'; // Importing the CSS file

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  const goToMenuPage = () => {
    navigate(`/restaurants/${restaurant.restaurant_id}/menus`); 
  };

  return (
    <div className="restaurant-card" onClick={goToMenuPage}>
        <img src={restaurant.logo_url} alt={`${restaurant.name} Logo`} style={{ width: '100px', height: '100px' }} />
        <h3>{restaurant.name}</h3>
        <p>{restaurant.location}</p>
        <p>{restaurant.description}</p>
    </div>
);
}

export default RestaurantCard;