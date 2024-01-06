import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import BodyForm from './BodyForm';
import MealForm from './MealForm';
import Review from './Review';
import { useSelector, useDispatch } from 'react-redux';


const steps = ['Calorie Calculator', 'Meal planner', 'Review your plan'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BodyForm />;
        case 1:
            return <MealForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    const isCalculated = useSelector(state => state.form.isCalculated);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    backgroundColor: '#e5f3ff'
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="#1976D2" noWrap>
                        Healthy & Fit
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4, backgroundColor: '#ffffff' }}>
                <Paper variant="outlined" sx={{
                    my: { xs: 3, md: 6 },
                    p: { xs: 2, md: 3 },
                    backgroundColor: '#fcfdff', // lighter shade of AppBar color
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)' // soft shadow
                }}>

                    <Typography component="h1" variant="h4" align="center" color="#1976D2">
                        Free Health & Fitness Calculator
                    </Typography>

                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, color: '#1976D2' }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1, backgroundColor: '#1976D2', color: 'white' }}
                                    disabled={activeStep === 0 && !isCalculated} // Disable if not calculated at step 0
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>

                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </React.Fragment>
    );
}
