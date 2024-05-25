const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./apiHandler");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
