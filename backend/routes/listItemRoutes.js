// Imports
const express = require("express");
const ListItem = require("../models/listItemModel");
const router = express.Router();
const {
    getListItems,
    createListItem,
    updateListItem,
    deleteListItem
} = require("../controllers/listItemController");

// GET: Gets all tasks
router.get("/", getListItems);

// POST: Creates a new task
router.post("/", createListItem);

// PATCH: Updates a single task
router.patch("/:id", updateListItem);

// DELETE: Deletes a single task
router.delete("/:id", deleteListItem);

module.exports = router;