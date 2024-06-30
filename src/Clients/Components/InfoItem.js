import { LocalPhone, LocationOn, WhatsApp, Share } from '@mui/icons-material';
import { Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Icons = {
    phone: <LocalPhone />,
    location: <LocationOn />,
    whatsApp: <WhatsApp />,
    share: <Share />,
};

const InfoItem = ({ color, SecondColor, item, action }) => {
    const data = (
        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center" useFlexGap>
            <Paper sx={{ background: "#fff", p: 1, borderRadius: 10 }} elevation={10}>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{ background: SecondColor, borderRadius: "50%", height: "40px", width: "40px", color: "white" }}
                    >
                        {Icons[item.type]}
                    </Stack>
                    <Typography fontSize={16} color="black" fontWeight="bolder">
                        {item.value}
                    </Typography>
                </Stack>
            </Paper>
        </Stack>
    );

    return action ? (
        <div>
            {data}
        </div>
    ) : (
        <Link target="_blank" to={item.link} style={{ textDecoration: "none" }}>
            {data}
        </Link>
    );
};

export default InfoItem;
