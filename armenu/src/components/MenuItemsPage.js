// src/components/MenuItemsPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMenuItems } from './ApiUtils'; // Adjust this function to handle fetching items

function MenuItemsPage() {
    const { menuId } = useParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenuItems(menuId)
          .then(setItems)
          .catch(err => {
              console.error('Failed to fetch items:', err);
              setError('Failed to load items');
          });
    }, [menuId]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Menu Items</h2>
            <ul>
                {items.map(item => (
                    <li key={item.item_id}>
                        <h4>{item.name} - ${item.price}</h4>
                        <p>{item.description}</p>
                        {item.image_url && <img src={item.image_url} alt={item.name} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuItemsPage;