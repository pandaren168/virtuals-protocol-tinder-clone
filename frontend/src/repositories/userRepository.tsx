import axios from "axios";
import { UserProfile } from "../models/userModel";

export const fetchUserRecommendations = async (userPayload: {
    id: number;
    university: string;
    interests: string[];
}): Promise<UserProfile[]> => {
    try {
        const response = await axios.post("http://localhost:4000/recommendations", userPayload, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status !== 200) {
            throw new Error("Failed to fetch recommended users");
        }

        const data = response.data;

        return data
            .map((user: any) => ({
                id: user.id.toString(),
                name: user.name,
                gender: user.gender,
                location: user.location,
                university: user.university,
                interests: JSON.parse(user.interests),
            }))
            .sort(() => -1);
    } catch (error) {
        console.error("Error fetching recommended users:", error);
        return [];
    }
};
