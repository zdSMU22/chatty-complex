const routes = require ("express").Router();

const { Router } = require("express");
const {
    CreateThoughts,
    DeleteThoughts,
    UpdateThoughts,
    GetThoughts,
    ThoughtsId,
    AddReactions,
    RemoveReaction
} = require("../../controllers/thoughtController");

Router
.route('/')
.get(GetThoughts)
.post(CreateThoughts);

Router
.route("/")
.get(ThoughtsId)
.put(UpdateThoughts)
.delete(DeleteThoughts);

Router
.route('/:thoughtId/reactions')
.post(AddReactions);

Router
.route('/:thoughtId/reactions/:reactionId')
.delete(RemoveReaction);

module.exports = routes;


