import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import menu1 from "../../imgs/bait-ward/menu1.jpg"
import menu2 from "../../imgs/bait-ward/menu2.jpg"
import menu3 from "../../imgs/bait-ward/menu3.jpg"
import menu4 from "../../imgs/bait-ward/menu4.jpg"
import menu5 from "../../imgs/bait-ward/menu5.jpg"
import menu6 from "../../imgs/bait-ward/menu6.jpg"
import menu7 from "../../imgs/bait-ward/menu7.jpg"
import menu8 from "../../imgs/bait-ward/menu8.jpg"
import menu9 from "../../imgs/bait-ward/menu9.jpg"
import menu10 from "../../imgs/bait-ward/menu10.jpg"
import menu11 from "../../imgs/bait-ward/menu11.jpg"
import menu12 from "../../imgs/bait-ward/menu12.jpg"
import menu13 from "../../imgs/bait-ward/menu13.jpg"
import menu14 from "../../imgs/bait-ward/menu14.jpg"

const AutoPlaySwipeableViews = SwipeableViews

const images = [
    {
        label: 'menu page 1',
        imgPath: menu1,
    },
    {
        label: 'menu page 2',
        imgPath: menu2,
    },
    {
        label: 'menu page 3',
        imgPath: menu3,
    },
    {
        label: 'menu page 4',
        imgPath: menu4,
    },
    {
        label: 'menu page 5',
        imgPath: menu5,
    },
    {
        label: 'menu page 6',
        imgPath: menu6,
    },
    {
        label: 'menu page 7',
        imgPath: menu7,
    },
    {
        label: 'menu page 8',
        imgPath: menu8,
    },
    {
        label: 'menu page 9',
        imgPath: menu9,
    },
    {
        label: 'menu page 10',
        imgPath: menu10,
    },
    {
        label: 'menu page 11',
        imgPath: menu11,
    },
    {
        label: 'menu page 12',
        imgPath: menu12,
    },
    {
        label: 'menu page 13',
        imgPath: menu13,
    },
    {
        label: 'menu page 14',
        imgPath: menu14,
    },


];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 600,
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        sx={{ color: (theme) => theme.palette.text.primary }}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button sx={{ color: (theme) => theme.palette.text.primary }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
