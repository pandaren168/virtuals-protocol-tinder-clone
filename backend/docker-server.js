const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dockerRoutes = require("./dockerHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve Docker-specific endpoints
app.use("/", dockerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
