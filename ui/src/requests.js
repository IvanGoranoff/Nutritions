import axios from 'axios';

export const Calories = async (data) => {
  const options = {
    method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
    params: {
        age: data.age, 
        gender: data.gender, 
        weight: data.weight,
        height: data.height,
        activitylevel: data.activitylevel,
    },
    headers: {
      'X-RapidAPI-Key': '85c56330a1mshd8b18d49a34d3c1p19041fjsn27857330e68f',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };
  console.log(options);

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
