import axios from 'axios';

const fetchRecipes = async (minCalories, maxCalories) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/findByNutrients', {
            params: {
                minCalories: minCalories,
                maxCalories: maxCalories,
                number: 7, // Броят на рецептите, които искате да получите
                apiKey: 'e6d8ceb34d4c491592c77155c463f51a' // Заменете с вашия API ключ
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};

export default fetchRecipes;
