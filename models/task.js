const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    Group: {
        type: String,
    },
    completedBy: {
        type: String,
    },
    status: {
        type: Boolean, // Corrected data type to Boolean
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
