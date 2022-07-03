const {Schema, Types, model} = require("mongoose");
const reactionSchema = require("./reaction");

const ThoughSchema = new Schema (
    {
        thoughtText: {

        },

        createdAt: {

        },

        username: {

        },

        reactions: {

        },
    }
)