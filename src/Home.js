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
import ProfileImage from './Clients/Components/ProfileImage';
import QrCodeProfile from './Clients/typesOfQr/QrCodeProfile';

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
}));

function Home(props) {
    let dataArray = Object.entries(clients).map(([key, value]) => {
        return {
            key: key,
            image: value.image
        };
    });

    const data = {
        "name": "mountain",
        "color": "#fff",
        "image": "profile.jpg",
        "phone": {
            "name": "01060168136",
            "link": "+201060168136"
        },
        "whatsApp": {
            "name": "01060168136",
            "link": "+201060168136"
        },
        "facebook": {
            "name": "Jeep City- El Tantawy USA",
            "link": "https://www.facebook.com/@m.mountain.agency/"
        },
        "instagram": {
            "name": "Jeep City - El Tantawy USA",
            "link": "https://www.instagram.com/mm_adv_agency"
        },
    }

    return (
        <Root>
            <QrCodeProfile client={data} hidePoweredBy/>
            <Stack justifyContent={"center"} alignItems={"center"} spacing={2} mt={3}>
                <Typography variant='h4'>Our Clients</Typography>
                <Stack direction={"row"} useFlexGap spacing={3} flexWrap={"wrap"} justifyContent={"center"}>
                    {dataArray.map((e) =>
                        <a key={e.key} href={`./${e.key}`}>
                            <ProfileImage clientColor={"#d4d2d3"} img={require(`./imgs/${e.image}`)} />
                        </a>
                    )}
                    {otherClients.map((e, index) =>
                        e.link ? <a key={index} href={`${e.link}`} target='_blank' rel="noreferrer">
                            <ProfileImage clientColor={"#d4d2d3"} img={require(`./imgs/${e.image}`)} />

                        </a> :
                            <Box className={classes.item} key={index} >
                                <ProfileImage clientColor={"#d4d2d3"} img={require(`./imgs/${e.image}`)} />
                            </Box>
                    )}
                </Stack>
            </Stack>
            {/* <Box sx={{ width: "100%", height: "500px", background: "#fff", padding: "10px", textAlign: "center" }}>
                <QRCode value="https://qr.mountain-egy.site/alakad-jellewery" style={{ height: "100%" }} />
            </Box> */}
        </Root>
    )
}

export default Home