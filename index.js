const express = require("express");
const connectDB = require("./config/DBconnection");
const dotenv = require("dotenv").config();
connectDB();
const app = express();
app.use(express.json());

const port = process.env.PORT;
app.use("/api/contacts", require("./routes/contactRoutes"));
app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
})
