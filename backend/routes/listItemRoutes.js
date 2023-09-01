// NPM Imports
const express = require("express");
const router = express.Router();

// GET: Gets all tasks
router.get("/", (req, res) => {
    res.json({ mssg: "GET all tasks" });
});

// POST: Creates a new task
router.post("/", (req, res) => {
    const newTask = req.body;
    console.log("Hit the post route in server", newTask);
    res.json(req.body);
});

// GET: Gets a single task
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single task"});
});

// PATCH: Updates a single task
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH a single task"});
});

// DELETE: Deletes a single task
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a single task"});
});

module.exports = router;