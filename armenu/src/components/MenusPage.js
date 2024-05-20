// src/components/MenusPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMenus } from './ApiUtils';
import './MenusPage.css';

function MenusPage() {
	const { restaurantId } = useParams();
	const [menus, setMenus] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchMenus(restaurantId)
			.then(setMenus)
			.catch((err) => {
				console.error('Failed to fetch menus:', err);
				setError('Failed to load menus');
			});
	}, [restaurantId]);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className='container'>
			<h2>Menus</h2>
			<ul className='list'>
				{menus.map((menu) => (
					<li key={menu.menu_id} className='listItem'>
						<Link to={`/menus/${menu.menu_id}/items`} className='link'>
							{menu.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default MenusPage;
