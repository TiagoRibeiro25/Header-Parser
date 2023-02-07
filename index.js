require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

// API endpoint
app.get("/api/whoami", (req, res) => {
	return res.json({
		ipaddress: req.ip,
		language: req.headers["accept-language"],
		software: req.headers["user-agent"],
	});
});

// listen for requests :)
app.listen(port, () => console.log(`Your app is listening on port ${port}`));
