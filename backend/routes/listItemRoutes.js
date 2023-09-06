// Imports
const express = require("express");
const ListItem = require("../models/listItemModel");
const router = express.Router();

// GET: Gets all tasks
router.get("/", async (req, res) => {
    try {
        const listItems = await ListItem.find().exec();
        res.status(200).json(listItems);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
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

// PATCH: Updates a single task
router.patch("/:id", async (req, res) => {
    const taskToEdit = req.body;
    try {
        const newTask = await ListItem.findByIdAndUpdate(req.params.id, taskToEdit, {new: true});
        res.status(200).json(newTask);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

// DELETE: Deletes a single task
router.delete("/:id", async (req, res) => {
    try {
        const taskToDelete = await ListItem.findByIdAndDelete(req.params.id).exec();
        res.status(200).json(taskToDelete);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

module.exports = router;