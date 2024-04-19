import { Avatar, Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import ZeroWidthStack from './Item';
import social from './social.json'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import clients from './clients.json';
import otherClients from './otherClients.json';

// import QRCode from "react-qr-code";
import { FaWhatsapp } from 'react-icons/fa';

const PREFIX = 'Home';

const classes = {
    leftWrapper: `${PREFIX}-leftWrapper`,
    content: `${PREFIX}-content`,
    image: `${PREFIX}-image`,
    item: `${PREFIX}-item`,
    contentImg: `${PREFIX}-contentImg`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    height: "100%",
    // backgroundImage: 'url(./imgs/profile.jpg)',
    [`& .${classes.leftWrapper}`]: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        position: "relative",
        [`&::before`]: {
            content: "''",
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.8)",
            position: "absolute",
            top: 0,
            left: 0,
        },
    },
    [`& .${classes.content}`]: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        padding: theme.spacing(3, 0)
    },
    [`& .${classes.image}`]: {
        height: "250px",
        width: "250px",
        borderRadius: "50%"
    },

    [`& .${classes.item}`]: {
        position: "relative",
        margin: theme.spacing(2, 4),
        width: "250px",
        height: "250px",
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
            background: `linear-gradient(315deg,${theme.palette.primary.main},#d4d2d3)`,
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

function Home() {
    let dataArray = Object.entries(clients).map(([key, value]) => {
        return {
            key: key,
            image: value.image
        };
    });

    return (
        <Root>
            <Grid container width={"100%"} height={"100%"} borderBottom={(theme) => `1px solid ${theme.palette.divider}`}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box className={classes.leftWrapper} sx={{ backgroundImage: `url(${require('./imgs/profile.jpg')})`, }}>
                        <div className={classes.content}>
                            <Box className={classes.item}>
                                <Box className={classes.contentImg}>
                                    <img src={require('./imgs/profile.jpg')} alt='profile' />
                                </Box>
                            </Box>
                            <Typography variant='h3' my={2} textAlign={"center"}>Mountain Marketing Agency</Typography>
                            <Stack direction={"row"} spacing={2}>
                                <Stack alignItems={"center"}>
                                    <a target='_blank' href={`https://wa.me/+201060168136`} rel="noreferrer">
                                        <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                            <FaWhatsapp />
                                        </Avatar>
                                    </a>
                                    <Typography color={"text.primary"}>
                                        WhatsApp
                                    </Typography>
                                </Stack>
                                <Stack alignItems={"center"}>
                                    <a target='_blank' href={`tel:+201060168136`} rel="noreferrer">
                                        <Avatar sx={{ width: 30, height: 30, background: "white" }}>
                                            <LocalPhoneIcon />
                                        </Avatar>
                                    </a>
                                    <Typography color={"text.primary"}>
                                        Mobile
                                    </Typography>
                                </Stack>
                            </Stack>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <div className={classes.content}>
                        <Typography variant='h3' mb={2}>Social Media</Typography>
                        {social.map((e, i) =>
                            e.link && <ZeroWidthStack
                                key={i}
                                link={e.link}
                                icon={e.id}
                                name={e.name}
                            />
                        )}
                    </div>
                </Grid>
            </Grid>
            <Stack justifyContent={"center"} alignItems={"center"} spacing={2} mt={3}>
                <Typography variant='h4'>Our Clients</Typography>
                <Stack direction={"row"} useFlexGap spacing={3} flexWrap={"wrap"} justifyContent={"center"}>
                    {dataArray.map((e) =>
                        <a key={e.key} href={`./${e.key}`}>
                            <Box className={classes.item} >
                                <Box className={classes.contentImg}>
                                    <img src={require(`./imgs/${e.image}`)} alt='profile' />
                                </Box>
                            </Box>
                        </a>
                    )}
                    {otherClients.map((e, index) =>
                        e.link ? <a key={index} href={`${e.link}`} target='_blank' rel="noreferrer">
                            <Box className={classes.item} >
                                <Box className={classes.contentImg}>
                                    <img src={require(`./imgs/${e.image}`)} alt='profile' />
                                </Box>
                            </Box>
                        </a> :
                            <Box className={classes.item} key={index} >
                                <Box className={classes.contentImg}>
                                    <img src={require(`./imgs/${e.image}`)} alt='profile' />
                                </Box>
                            </Box>
                    )}
                </Stack>
            </Stack>
            {/* <Box sx={{ width: "100%", height: "500px", background: "#fff", padding: "10px", textAlign: "center" }}>
                <QRCode value="https://qr.mountain-egy.site/elshamy" style={{ height: "100%" }} />
            </Box> */}
        </Root>
    )
}

export default Home