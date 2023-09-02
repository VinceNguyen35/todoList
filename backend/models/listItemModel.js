const mongoose = require("mongoose");

const listItemSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("ListItem", listItemSchema);
