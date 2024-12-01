import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js"; // Make sure Fancybox is imported properly
import "@fancyapps/ui/dist/fancybox/fancybox.css"; // Fancybox CSS
import { IoIosImages } from "react-icons/io";
import { BiSolidCategoryAlt, BiSolidOffer } from "react-icons/bi";

const PREFIX = "InfoQr";

const classes = {
    paper: `${PREFIX}-paper`,
};

const Root = styled("div")(({ theme }) => ({
    textDecoration: "none",
    [`& .${classes.paper}`]: {
        borderRadius: "40px",
        cursor: "pointer"
    },
}));

const Icons = {
    menu: <IoIosImages color='grey' size={30} />,
    offers: <BiSolidOffer color='#f44336' size={30} />,
    categories: <BiSolidCategoryAlt color='#0088cc' size={30} />,
};

const SlideShowLink = ({ type, title, color, id, folderType }) => {    
    const [menuImages, setMenuImages] = useState([]);

    // Dynamically import menu images based on `id`
    useEffect(() => {
        if (id) {
            import(`../../imgs/${id}/${folderType}/images`)
                .then((images) => {
                    setMenuImages(images.default || []);
                })
                .catch((error) => {
                    console.error("Error loading images: ", error);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleOpenSlideshow = () => {
        Fancybox.show(
            menuImages.map((src) => ({
                src,
                type: "image",
            }))
        );
    };

    return (
        <Root>
            <Stack
                component={Paper}
                p={2}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                className={classes.paper}
                elevation={5}
                onClick={handleOpenSlideshow}
            >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Avatar sx={{ bgcolor: type === "snapChat" ? "#000" : "#fff" }}>
                        {Icons[type]}
                    </Avatar>
                    <Typography fontSize={18}>{title ?? type}</Typography>
                </Stack>
                <Avatar sx={{ bgcolor: color }}>
                    <ArrowForward sx={{ color: (theme) => theme.palette.getContrastText(color) }} />
                </Avatar>
            </Stack>
        </Root>
    );
};

export default SlideShowLink;
