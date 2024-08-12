const dotenv = require("dotenv");
dotenv.config();
const express = require('express'); 
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).then(resp => {
    console.log("Database Connected!")
}).catch(error => console.log("Unable to connect to DB!"));

app.get("/", (req, res) => {
    res.send("Working!");
})

app.use("/api/user", require("./controllers/user.controller"));
app.use("/api/contact", require("./controllers/contact.controller"))
app.use("/api/packages", require("./controllers/package.controller"))
app.use("/api/blogs", require("./controllers/blogs.controller"))
app.use('/api/chat', require("./controllers/message.controller"));


app.all("*", function (req, res) {
    res.status(404).send("Skypro Servers");
});

app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}!`);  
})