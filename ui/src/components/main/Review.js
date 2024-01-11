import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Review() {
    const selectedCalorieGoal = useSelector(state => state.user.selectedCalorieGoal);
    const [mealPlan, setMealPlan] = useState(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        fetchMealPlanWeek();
    }, [selectedCalorieGoal]); // Dependency on selectedCalorieGoal to refetch when it changes

    const fetchMealPlanWeek = async () => {
        // Ensure there's a selected calorie goal before fetching
        if (selectedCalorieGoal) {
            const username = "ivangoranoff5";
            const hash = "95cbe9f9d7cc1ae0bcf24f000c6b4d62b5d0c21c";
            const startDate = new Date().toISOString().split('T')[0]; // Use current date

            try {
                const response = await axios.get(`https://api.spoonacular.com/mealplanner/${username}/week/${startDate}`, {
                    params: {
                        hash: hash,
                        apiKey: "e6d8ceb34d4c491592c77155c463f51a",
                        targetCalories: selectedCalorieGoal.calory // Add targetCalories parameter
                    }
                });
                setMealPlan(response.data.days);
            } catch (error) {
                console.error('Error fetching meal plan:', error);
            }
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {mealPlan && mealPlan.map((day, index) => (
                <Accordion 
                    key={day.date} 
                    expanded={expanded === `panel${index}`} 
                    onChange={handleChange(`panel${index}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                    >
                        <Typography>{day.day}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {day.items.map(item => (
                            <div key={item.id}>
                                <Typography variant="body1">{item.value.title}</Typography>
                                {/* Additional details can be included here */}
                            </div>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
