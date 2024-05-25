import React from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { Stack, Typography } from "@mui/material";
import { CardData, CardSwiper } from "react-card-swiper";
import { UserProfile } from "../../../models/userModel";
import "./SwipeCard.css";

interface SwipeCardProps {
    users: UserProfile[];
}

const generateAvatar = (seed: string): string => {
    const avatar = createAvatar(avataaars, { seed });
    const svgContent = avatar.toString();
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

const generateUserContent = (user: UserProfile) => {
    return (
        <div className="content">
            <Typography variant="h5" component="div" gutterBottom>
                {user.name}
            </Typography>
            <Typography variant="body2">{user.gender}</Typography>
            <Typography variant="body2">{user.location}</Typography>
            <Typography variant="body2">{user.university}</Typography>
            <Typography variant="body2">{user.interests.join(", ")}</Typography>
        </div>
    );
};

const SwipeCard = ({ users }: SwipeCardProps) => {
    const massagedCardData: CardData[] = users.map((user) => ({
        id: user.id,
        meta: { description: user.id },
        src: generateAvatar(user.name),
        content: generateUserContent(user),
    }));

    return (
        <Stack height={"100%"} width={"100%"} direction="column" alignItems="center" justifyContent={"end"} p={2}>
            <div className="card-style">
                <CardSwiper data={massagedCardData} withActionButtons={false} withRibbons={false} />
            </div>
        </Stack>
    );
};

export default SwipeCard;
