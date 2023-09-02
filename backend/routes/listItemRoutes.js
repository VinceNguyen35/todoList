// Imports
const express = require("express");
const ListItem = require("../models/listItemModel");
const router = express.Router();

// GET: Gets all tasks
router.get("/", (req, res) => {
    res.json({ mssg: "GET all tasks" });
});

// POST: Creates a new task
router.post("/", async (req, res) => {
    const newTask = req.body;
    try {
        const listItem = await ListItem.create(newTask);
        res.status(200).json(listItem);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
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