import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/actions/userActions'; 
import axios from 'axios';


export default function AddressForm() {
  const user = useSelector((state) => state.user.user);

  // Проверка дали user е дефиниран
  const email = user?.email || "";
  const username = user?.username || "";
  const [calText, setCalText] = useState(false);
  const [calculatedCalories, setCalculatedCalories] = useState(0);

  
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    weightGoal: '',
  });

  const calculateCalories = () => {
    // Тук добавете вашата логика за изчисляване на калориите
    // Пример: setCalculatedCalories(изчислени калории);
    setCalculatedCalories(2000); // Примерна стойност
    setCalText(true);
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(formData);

    event.preventDefault();
    dispatch(updateUserData(formData));
    console.log(formData);
    calculateCalories();
  };


  return (
    <form onSubmit={handleSubmit}>
    <Typography variant="h6" gutterBottom>
        Welcome {user?.username || ""}!
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
         <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="age"
            name="age"
            label="Age"
            fullWidth
            variant="standard"
            value={formData.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="gender"
            name="gender"
            label="Gender"
            select
            fullWidth
            variant="standard"
            value={formData.gender}
            onChange={handleChange}
            SelectProps={{ native: true }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="weight"
            name="weight"
            label="Weight (kg)"
            fullWidth
            variant="standard"
            value={formData.weight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="height"
            name="height"
            label="Height (cm)"
            fullWidth
            variant="standard"
            value={formData.height}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="activityLevel"
            name="activityLevel"
            label="Activity Level"
            select
            fullWidth
            variant="standard"
            value={formData.activityLevel}
            onChange={handleChange}
            SelectProps={{ native: true }}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value="active">Very active (hard exercise/sports 6-7 days a week)</option>
            <option value="extra">Extra active (very hard exercise/sports & physical job)</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
              InputLabelProps={{
               shrink: true,
            }}
            id="weightGoal"
            name="weightGoal"
            label="Weight Goal"
            select
            fullWidth
            variant="standard"
            value={formData.weightGoal}
            onChange={handleChange}
            SelectProps={{ native: true }}
          >
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Weight</option>
          </TextField>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Calculate Calories
      </Button>
      {calText && (
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Your optimal calories based on your stats and goal are: {calculatedCalories} kcal
      </Typography>
    )}

    </form>
    
  );
}
