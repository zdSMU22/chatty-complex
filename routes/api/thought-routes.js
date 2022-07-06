const router = require ("express").Router();

const {
    createThoughts,
    deleteThoughts,
    updateThoughts,
    getThoughts,
    thoughtsId,
    addReactions,
    removeReaction
} = require("../../controllers/thoughtController");

Router.route('/').get(getThoughts).post(createThoughts);

Router.route("/:thoughtId").get(thoughtsId).put(updateThoughts).delete(deleteThoughts);

Router.route('/:thoughtId/reactions').post(addReactions);

Router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;


