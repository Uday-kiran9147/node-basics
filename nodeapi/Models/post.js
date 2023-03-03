const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(

    {
        title: {
            title: String,
            required: "Title is required", //if not provided given string is showed.
            minlength: 4,
        },
        body: {
            type: String,
            required: "Body is required",


        }
    }
)