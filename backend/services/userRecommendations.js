const db = require("../db/userDbSetup");

const recommendationsQuery = () => {
    return `
        SELECT id, name, gender, location, university, interests,
               ((CASE WHEN university = ? THEN 300 ELSE 0 END +
                CASE WHEN interests LIKE '%' || ? || '%' OR interests LIKE '%' || ? || '%' THEN 200 ELSE 0 END)
                + (RANDOM() * 100)) AS score
        FROM user_profiles
        WHERE id != ?
        ORDER BY score DESC
        LIMIT 10;
    `;
};

const recommendationService = {
    getRecommendations: async (id, university, interests) => {
        const interest1 = interests[0];
        const interest2 = interests[1];
        const query = recommendationsQuery();

        return new Promise((resolve, reject) => {
            db.all(query, [university, interest1, interest2, id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
};

module.exports = recommendationService;
