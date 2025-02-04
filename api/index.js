const express = require("express");
const mysql = require("mysql2/promise");

const api = express();
const port = 3000;

const dbConfig = {
	host: "localhost",
	user: "in-class-user",
	password: "87654321",
	database: "3310",
};

api.use(express.json()); //middleware
// first endpoint
//HTTP verbs POST(create), GET{to get}, PUT(update), PATCH(PARTIAL UPDATE), DELETE OPTIONS

api.get("/", (req, res) => {
	res.status(200).json({ message: "API is running" });
});

//Running
api.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
