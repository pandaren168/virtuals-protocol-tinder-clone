import { useState, useEffect } from "react";
import { fetchUserRecommendations } from "../../../repositories/userRepository";
import { UserProfile } from "../../../models/userModel";

const useSwipeLanding = () => {
    const [users, setUsers] = useState<UserProfile[]>([]);

    useEffect(() => {
        const getRecommendedUsers = async () => {
            const recommendedUsers = await fetchUserRecommendations({
                id: 1,
                university: "Taylor",
                interests: ["sports", "movies"],
            });
            setUsers(recommendedUsers);
        };

        getRecommendedUsers();
    }, []);

    return {
        users,
    };
};

export default useSwipeLanding;
