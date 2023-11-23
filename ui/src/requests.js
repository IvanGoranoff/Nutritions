import axios from 'axios';

export const Calories = async (age, gender, height, weight, activityLevel) => {
  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    params: { age, gender, height, weight, activityLevel },
    headers: {
      'X-RapidAPI-Key': '85c56330a1mshd8b18d49a34d3c1p19041fjsn27857330e68f',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
