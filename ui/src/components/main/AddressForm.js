import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';


export default function AddressForm() {
  const user = useSelector((state) => state.user.user);

  // Проверка дали user е дефиниран
  const email = user?.email || "";
  const username = user?.username || "";

  console.log("User from Redux Store:", user);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Welcome {username}!
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="age"
          name="age"
          label="Age"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="gender"
          name="gender"
          label="Gender"
          select
          fullWidth
          variant="standard"
          SelectProps={{
            native: true,
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="weight"
          name="weight"
          label="Weight (kg)"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="height"
          name="height"
          label="Height (cm)"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="activityLevel"
          name="activityLevel"
          label="Activity Level"
          select
          fullWidth
          variant="standard"
          SelectProps={{
            native: true,
          }}
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
          id="weightGoal"
          name="weightGoal"
          label="Weight Goal"
          select
          fullWidth
          variant="standard"
          SelectProps={{
            native: true,
          }}
        >
          <option value="maintain">Maintain Weight</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Weight</option>
        </TextField>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}
