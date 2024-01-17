import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Meal from "./Meal";
export default function Review() {
    const selectedCalorieGoal = useSelector(state => state.user.selectedCalorieGoal);
    const [mealPlan, setMealPlan] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        if (selectedCalorieGoal) {
            fetchMealPlanWeek();
        }
    }, [selectedCalorieGoal]);

    const fetchMealPlanWeek = async () => {
        const username = "ivangoranoff5";
        const hash = "95cbe9f9d7cc1ae0bcf24f000c6b4d62b5d0c21c";
        const startDate = new Date().toISOString().split('T')[0];

        try {
            const response = await axios.get(`https://api.spoonacular.com/mealplanner/${username}/week/${startDate}`, {
                params: {
                    hash: hash,
                    apiKey: 'e6d8ceb34d4c491592c77155c463f51a'
                }
            });
            setMealData(response.data.days);
        } catch (error) {
            console.error('Error fetching meal plan:', error);
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
              {mealData && Object.entries(mealData).map(([dayName, dayData], index) => (
              <Accordion 
              key={dayName} 
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
          >
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
              >
                  <Typography>{dayName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  {dayData.meals.map(meal => (
                      <Meal key={meal.id} meal={meal} />
                  ))}
              </AccordionDetails>
          </Accordion>
            ))}
        </div>
    );
}
