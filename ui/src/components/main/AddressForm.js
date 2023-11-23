import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/actions/userActions';
import axios from 'axios';
import { Calories } from '../../requests'; 


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
    activitylevel: '',
  });

  const activitylevelMapping = {
    'sedentary': 'level_1',
    'light': 'level_2',
    'moderate': 'level_3',
    'active': 'level_4',
    'extra': 'level_5',
  };
  
 

  const calculateCalories = async () => {
    const data = {
      ...formData,
      activitylevel: activitylevelMapping[formData.activitylevel] || formData.activitylevel,
    };
    console.log("Sending data to API:", data);
  
    try {
      const response = await Calories(data);
      console.log("API Response:", response);
      if (response && response.calories) {
        setCalculatedCalories(response.calories);
        setCalText(true);
        dispatch(updateUserData({calories: response.calories}))
      }
    } catch (error) {
      console.error("Error in calculateCalories:", error);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUserData(formData));
    console.log(formData);
    calculateCalories();
    setCalText(true);

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
            variant="outlined"
            value={formData.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth required variant="outlined">
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
            labelId="gender-label"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
        >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
        </Select>
        </FormControl>
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
            variant="outlined"
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
            variant="outlined"
            value={formData.height}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth required variant="outlined">
            <InputLabel id="activitylevel-label">Activity Level</InputLabel>
            <Select
                labelId="activitylevel-label"
                id="activitylevel"
                name="activitylevel"
                value={formData.activitylevel}
                onChange={handleChange}
                label="Activity Level"
            >
                <MenuItem value="level_1">Sedentary (little or no exercise)</MenuItem>
                <MenuItem value="level_2">Lightly active (light exercise/sports 1-3 days/week)</MenuItem>
                <MenuItem value="level_3">Moderately active (moderate exercise/sports 3-5 days/week)</MenuItem>
                <MenuItem value="level_4">Very active (hard exercise/sports 6-7 days a week)</MenuItem>
                <MenuItem value="level_5">Extra active (very hard exercise/sports & physical job)</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
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
        </Grid> */}
      </Grid>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Calculate Calories
      </Button>
      {calText && (
       <>
       <Typography variant="subtitle1" sx={{ mt: 2 }}>
         Your optimal calories based on your stats and goal are: {calculatedCalories} kcal . Choose a plan below to get started!
       </Typography>
   
       <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
         <Button variant="outlined" color="primary">Maintain</Button>
         <Button variant="outlined" color="primary">Weight Loss</Button>
         <Button variant="outlined" color="primary">Weight Gain</Button>
       </Box>
     </>
      )}

    </form>

  );
}
