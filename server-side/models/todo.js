const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    "id" : Number,
    "name" : String,
    "title" : String,
    "date": String,
    "description" : String,
    "completed" : Boolean
});

const PostTodo = mongoose.model('PostTodo', todoSchema);

module.exports = PostTodo;