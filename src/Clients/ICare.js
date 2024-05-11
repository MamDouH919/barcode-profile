import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { styled } from '@mui/material/styles';
import ZeroWidthStack from '../Item';
import clients from '../clients.json';
import image from '../imgs/iCare.jpg'
import ProfileImage from './Components/ProfileImage';
import BranchInfo from './Components/BranchInfo';

const PREFIX = 'ICare';

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
        backgroundImage: `url(${image})`,
        [`&::before`]: {
            content: "''",
            height: "100%",
            width: "100%",
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.7)",
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
}));

function ICare() {
    const client = clients['i-Care']
    return (
        <Root>
            <Grid container width={"100%"} height={"100%"}>
                <Grid xs={12} md={6} position={"relative"}>
                    <Box className={classes.leftWrapper} sx={{}}>
                        <div className={classes.content}>
                            <ProfileImage clientColor={client.color} img={image} secondaryColor={"#fff"}/>
                            <Typography variant='h3' my={2} textAlign={"center"} textTransform={"capitalize"}>{client.name}</Typography>
                        </div>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} bgcolor={`${client.color}`}>
                    <div className={classes.content}>
                        <Stack mb={2}>
                            <Typography variant='h3'>Social Media</Typography>
                            <Box height={"2px"} width={"100%"} bgcolor={"#000"} />
                        </Stack>
                        {client.facebook && <ZeroWidthStack
                            link={client.facebook.link}
                            icon={"facebook"}
                            name={client.facebook.name}
                        />}
                        {client.instagram && <ZeroWidthStack
                            link={client.instagram.link}
                            icon={"instagram"}
                            name={client.instagram.name}
                        />}
                        {client.branches.map((branch, i) =>
                            <BranchInfo branch={branch} key={i} />
                        )}
                    </div>
                </Grid>

            </Grid>
        </Root >
    )
}

export default ICare