const db = require("./db");
const { mockUsers } = require("./mockUser.json");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS user_profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            gender TEXT,
            location TEXT,
            university TEXT,
            interests TEXT
        );
    `);

    const insertQuery = `
            INSERT INTO user_profiles (name, gender, location, university, interests)
            VALUES (?, ?, ?, ?, ?)
        `;

    mockUsers.forEach((user) => {
        const [name, gender, location, university, interests] = user;

        db.run(insertQuery, [name, gender, location, university, JSON.stringify(interests)], (err) => {
            if (err) {
                console.error("Error inserting user:", err);
            }
        });
    });
});

module.exports = db;
