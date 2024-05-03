import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { fetchRestaurants } from './ApiUtils';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurants().then(data => {
            console.log("Fetched restaurants:", data); 
            setRestaurants(data);
        }).catch(error => {
            setError('Failed to fetch restaurants');
            console.error(error);
        });
    }, []);

    console.log(restaurants);
    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <div className="restaurant-list">
                    {restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.restaurant_id} restaurant={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default RestaurantList;