import React, { useState } from "react";
import axios from "axios";

interface ResponseData {
    hostedServiceUrl: string;
}

const WebHostingWidget = () => {
    const [githubRepoUrl, setGithubRepoUrl] = useState<string>("");
    const [hostedServiceUrl, setHostedServiceUrl] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post<ResponseData>("http://localhost:3000/register", { githubRepoUrl });
            setHostedServiceUrl(response.data.hostedServiceUrl);
            setError("");
        } catch (error) {
            setError("Failed to register GitHub repository URL");
            setHostedServiceUrl("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    GitHub Repository URL:
                    <input type="text" value={githubRepoUrl} onChange={(e) => setGithubRepoUrl(e.target.value)} />
                </label>
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>}
            {hostedServiceUrl && <p>Hosted Service URL: {hostedServiceUrl}</p>}
        </div>
    );
};

export default WebHostingWidget;
