import React, { useState } from 'react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import SwipeableViews from 'react-swipeable-views';
import { Box, Button, CircularProgress, MobileStepper, Stack } from '@mui/material'

const AutoPlaySwipeableViews = SwipeableViews



const Slider = ({ images, color }) => {
    // console.log(images);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const [loading, setLoading] = useState(true);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };
    return (
        <Stack flexGrow={1} justifyContent={"flex-start"} alignItems={"center"} sx={{ maxWidth: "auto", minHeight: "600px" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((image, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <>
                                {loading && (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            width: 80,
                                            minHeight: "600px"
                                        }}
                                    >
                                        <CircularProgress />
                                    </Box>
                                )}
                                <Box
                                    component="img"
                                    sx={{
                                        height: "100%",
                                        display: loading ? "none" : "block",
                                        maxWidth: "100%",
                                        overflow: "hidden",
                                        width: 400,
                                        opacity: loading ? 0 : 1,
                                        transition: "opacity 0.5s ease-in-out", // Add transition for smooth fade-in
                                    }}
                                    src={require(`../../imgs/${image}`)}
                                    alt={"menu-image"}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            </>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {images.length > 1 && <MobileStepper
                sx={{
                    "& div, & button": {
                        margin: "0 8px"
                    },
                    background: "none",
                    "& .MuiMobileStepper-dot": {
                        background: "#c0c0c0",
                        display: { xs: 'none', sm: 'block' } 
                    },
                    "& .MuiMobileStepper-dot.MuiMobileStepper-dotActive": {
                        background: color
                    }
                }}
                steps={maxSteps}
                position="bottom"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        sx={{
                            color: color, fontSize: '30px',
                            "&.Mui-disabled": {
                                color: "#c0c0c0"
                            }
                        }}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft style={{ fontSize: 50 }} />
                        ) : (
                            <KeyboardArrowRight style={{ fontSize: 50 }} />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        sx={{
                            color: color,
                            fontSize: '50px',
                            "&.Mui-disabled": {
                                color: "#c0c0c0"
                            }
                        }}
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight style={{ fontSize: 50 }} />
                        ) : (
                            <KeyboardArrowLeft style={{ fontSize: 50 }} />
                        )}
                    </Button>
                }
            />}
        </Stack>
    )
}

export default Slider
