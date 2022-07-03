const {Schema, model} = require("mongoose");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxLenght: 280,
            minLength: 1
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema],
    },

    {
        toJson: {
            getters: true,
            virtuals: true
        },

        id:false
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
