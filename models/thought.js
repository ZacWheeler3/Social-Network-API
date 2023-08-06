const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        //ask dave on Use a getter method to format the timestamp on query
        
    },
    username: {
        type: String,
        required: true,
    },
    reactions: 
    //(These are like replies)
  //Array of nested documents created with the `reactionSchema`
}






)