const express = require("express");
const server = express();
const db = ["Tobey", "Andrew", "Tom"];
server.use(express.json());

// Search for one name on the list
server.get("/logs/:index", (req, res) => {
    const { index } = req.params;
    return res.json(db[index]);
});

// Search for all names on the list
server.get("/logs", (req, res) => {
    return res.json(db);
});

// Insert a log on the list
server.post("/logs", (req, res) => {
    const { log } = req.body;
    db.push(log);

    return res.json(db);
});

// Change a log from the list
server.put("/logs/:index", (req, res) => {
    const { log } = req.body;
    const { index } = req.params;

    db[index] = log;

    return res.json(db);
});

// Delete a log from the list
server.delete("/logs/:index", (req, res) => {
    const { index } = req.params;
    db.splice(index, 1);

    return res.json(db);
});

// Turn on the server
server.listen(3000, () => {
    console.log("Server is running");
});
