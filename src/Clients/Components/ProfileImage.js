import React from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/material';
import { useTheme } from "@mui/system";


const PREFIX = 'Profile-Image';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
};

const Root = styled(Box)((
    {
        theme
    }
) => ({
    position: "relative",
    margin: theme.spacing(2, 4),
    borderRadius: "50%",
    // background: "#fafafa",
    overflow: "hidden",
    [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1, 1),
    },
    "&:before": {
        content: "''",
        position: "absolute",
        inset: "-10px 70px",
        transition: "0.5s",
        animation: "animate 4s linear infinite",
    },
    "&:after": {
        content: "''",
        position: "absolute",
        inset: "4px",
        // background: "white",
        borderRadius: "50%",
        zIndex: 1
    },
    "&:hover": {
        "&::before": {
            inset: "-10px 70px",
        },
        [`& .${classes.content}`]: {
            "& img": {
                opacity: 0.1
            }
        },
        [`& .${classes.name}`]: {
            opacity: 1
        },
        [`& .${classes.button}`]: {
            opacity: 1
        },
    },
    [`& .${classes.contentImg}`]: {
        position: "absolute",
        inset: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        zIndex: 3,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.5s",
            pointerEvents: "none",
        }
    },
}));
const ProfileImage = props => {
    const {
        img,
        clientColor,
        secondaryColor,
        size,
        name
    } = props

    const theme = useTheme()

    return (
        <Root
            sx={{
                ":before": {
                    background: `linear-gradient(315deg,${secondaryColor ? secondaryColor : theme.palette.primary.main},${clientColor})`,
                },
                width: size ?? "250px",
                height: size ?? "250px",
            }}
        >
            <Box className={classes.contentImg}>
                <img src={img} alt={name} />
            </Box>
        </Root>
    )
}

ProfileImage.propTypes = {
    img: PropTypes.string.isRequired,
    clientColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string
}

export default ProfileImage