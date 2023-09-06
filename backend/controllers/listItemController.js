const ListItem = require("../models/listItemModel");
const mongoose = require("mongoose");

// GET ALL List Items
const getListItems = async (req, res) => {
    try {
        const listItems = await ListItem.find().exec();
        res.status(200).json(listItems);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// CREATE a New List Item
const createListItem = async (req, res) => {
    const newTask = req.body;
    try {
        const listItem = await ListItem.create(newTask);
        res.status(200).json(listItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// UPDATE a List Item
const updateListItem = async (req, res) => {
    const taskToEdit = req.body;
    try {
        const newTask = await ListItem.findByIdAndUpdate(req.params.id, taskToEdit, { new: true });
        res.status(200).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// DELETE a List Item
const deleteListItem = async (req, res) => {
    try {
        const taskToDelete = await ListItem.findByIdAndDelete(req.params.id).exec();
        res.status(200).json(taskToDelete);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getListItems,
    createListItem,
    updateListItem,
    deleteListItem
};