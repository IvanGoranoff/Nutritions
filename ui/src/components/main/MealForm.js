import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector } from 'react-redux';

export default function MealForm() {
    const [expandedCard, setExpandedCard] = useState(null);
    const formData = useSelector(state => state.form.formData);
    const user = useSelector(state => state.user.user);


    const handleExpand = (cardIndex) => {
        setExpandedCard(cardIndex === expandedCard ? null : cardIndex);
    };

    console.log(user?.calories?.["Mild weight gain"]?.calory
    )
    // Рандом данни за храни
    const foods = [
        "Пица",
        "Паста",
        "Салата",
        "Супа",
        "Сандвич",
        "Бургер",
        "Суши",
        "Сладолед",
        "Френска патладжан",
        "Ягоди",
    ];

    const getRandomFood = () => {
        const randomIndex = Math.floor(Math.random() * foods.length);
        return foods[randomIndex];
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Choose your calorie goal
            </Typography>
            {/* Първа карта */}
            <Card style={{ marginBottom: '10px', width: '100%', paddingLeft: 10, paddingTop: 0 }}>
                <CardContent style={{ paddingBottom: 16 }}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                        <h4 style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: 10 }}>  Maintain weight  {user?.calories?.["Mild weight gain"]?.calory} cal</h4>
                        <IconButton
                            className={expandedCard === 0 ? 'expandOpen' : 'expand'}
                            aria-expanded={expandedCard === 0}
                            onClick={() => handleExpand(0)}
                            style={{ display: 'inline-block', marginTop: '20px' }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>

                    {/* Данни за първата карта */}
                    {expandedCard === 0 && (
                        <Typography variant="body1">
                            Избрана храна: {getRandomFood()}
                        </Typography>
                    )}
                </CardContent>
            </Card>

            {/* Втора карта */}
            <Card style={{ marginBottom: '10px', width: '100%', paddingLeft: 10, paddingTop: 0 }}>
                <CardContent style={{ paddingBottom: 16 }}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                        <h4 style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: 10 }}>Weight gain</h4>
                        <IconButton
                            className={expandedCard === 1 ? 'expandOpen' : 'expand'}
                            aria-expanded={expandedCard === 1}
                            onClick={() => handleExpand(1)}
                            style={{ display: 'inline-block', marginTop: '20px' }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>

                    {/* Данни за втората карта */}
                    {expandedCard === 1 && (
                        <Typography variant="body1">
                            Избрана храна: {getRandomFood()}
                        </Typography>
                    )}
                </CardContent>
            </Card>

            {/* Трета карта */}
            <Card style={{ marginBottom: '10px', width: '100%', paddingLeft: 10, paddingTop: 0 }}>
                <CardContent style={{ paddingBottom: 16 }}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center' }}>
                        <h4 style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: 10 }}> Weight loss </h4>
                        <IconButton
                            className={expandedCard === 2 ? 'expandOpen' : 'expand'}
                            aria-expanded={expandedCard === 2}
                            onClick={() => handleExpand(2)}
                            style={{ display: 'inline-block', marginTop: '20px' }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Grid>

                    {/* Данни за третата карта */}
                    {expandedCard === 2 && (
                        <Typography variant="body1">
                            Избрана храна: {getRandomFood()}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </React.Fragment>
    );
}
