const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'todo',
        enum: ['todo', 'inprogress', 'done']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Ticket', TicketSchema)