const {Schema, types} = require ('mongoose');
const reactionSchema = new Schema (
    {
        reactionId: {
            types: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    },

    {
        toJson: {
            getters: true
        },

        id:false
    }
);

module.exports = reactionSchema;

