const { Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+{2}/, `is not an email address` ]
    },
    thoughts:[
        {
        type: Schema.Types.ObjectId,
        ref: 'Thought'   
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
        }
    ]
});

const User = model('User', userSchema);

model.exports = User;