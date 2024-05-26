const express = require("express");
const { spinUpDockerContainer } = require("./dockerHelper");
const net = require("net");

const router = express.Router();
const PORT_RANGE_START = 10000;
const PORT_RANGE_END = 11000;
const githubRepoUrlRegex = /^https?:\/\/github\.com\/[\w-]+\/[\w-]+$/;

router.post("/", async (req, res) => {
    const { githubRepoUrl } = req.body;

    if (!isValidGithubRepoUrl(githubRepoUrl)) {
        return res.status(400).json({ error: "Invalid GitHub repository URL" });
    }

    try {
        const port = await findAvailablePort();

        await spinUpDockerContainer(githubRepoUrl, port);

        const hostedServiceUrl = `http://${req.hostname}:${port}`;
        res.json({ hostedServiceUrl });
    } catch (error) {
        console.error("Error registering hosted service:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

function isValidGithubRepoUrl(url) {
    return githubRepoUrlRegex.test(url);
}

async function findAvailablePort() {
    for (let port = PORT_RANGE_START; port <= PORT_RANGE_END; port++) {
        const server = net.createServer();

        const portAvailable = new Promise((resolve, reject) => {
            server.once("error", (err) => {
                if (err.code === "EADDRINUSE") {
                    server.close();
                    reject();
                } else {
                    reject(err);
                }
            });

            server.once("listening", () => {
                server.close();
                resolve(port);
            });

            server.listen(port);
        });

        try {
            await portAvailable;
            return port;
        } catch {}
    }

    throw new Error("No available ports within the specified range");
}

module.exports = router;
