import React from 'react'
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import SocialCard from './SocialCard';

const PREFIX = 'InfoQr';

const classes = {
    paper: `${PREFIX}-paper`,
};

const Root = styled(Stack)(({ theme }) => ({
    [`& .${classes.paper}`]: {
        borderRadius: "40px",
    },
}));

const BranchData = ({
    branch,
    color
}) => {
    return (
        <Root spacing={2}>
            <Typography variant='h2' fontSize={30} textAlign={"center"}>
                {branch.branchName}
            </Typography>
            {branch.whatsApp && branch.whatsApp.map((element, index) =>
                <SocialCard to={`https://wa.me/${element}`} type={"whatsApp"} title={element} key={index} color={color} />
            )}
            {branch.phone && branch.phone.map((element, index) =>
                <SocialCard to={`tel:${element}`} type={"phone"} title={element} key={index} color={color} />
            )}
            {branch.location && <SocialCard to={branch.location} type={"location"} color={color} />}
        </Root>
    )
}

export default BranchData