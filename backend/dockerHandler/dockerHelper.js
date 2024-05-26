const { spawn } = require("child_process");

function spinUpDockerContainer(githubRepoUrl, port) {
    return new Promise((resolve, reject) => {
        const containerName = `container-${port}`;

        const dockerProcess = spawn(
            "docker",
            ["run", "--name", containerName, "-d", "-p", `${port}:3000`, "my-node-app"],
            { shell: true }
        );

        dockerProcess.stdout.on("data", (data) => {
            console.log(`stdout: ${data}`);
        });

        dockerProcess.stderr.on("data", (data) => {
            console.error(`stderr: ${data}`);
        });

        dockerProcess.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error("Failed to spin up Docker container"));
            }
        });
    });
}

module.exports = { spinUpDockerContainer };
