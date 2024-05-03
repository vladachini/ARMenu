export const BASE_API_URL = "http://localhost:3500";
export const GET_RESTAURANTS_URL = `${BASE_API_URL}/restaurants`;
export const MENU_ITEMS_URL = (menuId) => `${BASE_API_URL}/menus/${menuId}/items`;
export const MENUS_URL = (restaurantId) => `${BASE_API_URL}/restaurants/${restaurantId}/menus`;

export const fetchRestaurants = async () => {
    try {
        const response = await fetch(GET_RESTAURANTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch restaurants');
        }
    } catch (error) {
        console.error("Failed to fetch restaurants:", error);
        throw error; // Re-throw to handle it in the component
    }
};

// Fetch menu items for a specific restaurant
export const fetchMenus = async (restaurantId) => {
  try {
    const response = await fetch(MENUS_URL(restaurantId));
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch menus');
    }
  } catch (error) {
    console.error("Error fetching menus for Restaurant ID:", restaurantId, error);
    throw error; // Re-throw to let the caller handle it
  }
};


// Fetch menu items for a specific restaurant
export const fetchMenuItems = async (menuId) => {
    try {
      const response = await fetch(MENU_ITEMS_URL(menuId));
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch menu items');
      }
    } catch (error) {
      console.error("Error fetching menu items for Menu ID:", menuId, error);
      throw error; // Re-throw to let the caller handle it
    }
  };