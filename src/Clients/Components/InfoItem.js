import { LocalPhone, LocationOn, WhatsApp, Share } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Icons = {
    phone: <LocalPhone />,
    location: <LocationOn />,
    whatsApp: <WhatsApp />,
    share: <Share />,
}
// ContentCopy
const InfoItem = ({ color, item, action }) => {
    const copyFunction = () => {
        // console.log("object")
    }
    const data = <Stack direction={"row"} spacing={2} flexWrap={"wrap"} justifyContent={"center"} useFlexGap>
        <Stack sx={{ background: "#d7d7d7d7", p: 1, borderRadius: 10 }}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{ background: color, borderRadius: "50%", height: "40px", width: "40px", color: "white" }}
                >
                    {Icons[item.type]}
                </Stack>
                <Typography fontSize={16} color={color} fontWeight={"bolder"}>
                    {item.value}
                </Typography>
            </Stack>
        </Stack>
    </Stack>
    return action ?
        <div onClick={copyFunction}>{data}</div> :
        <Link target='_blank' to={item.link} style={{ textDecoration: "none" }}>
            {data}
        </Link>

}

export default InfoItem
