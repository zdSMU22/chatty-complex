const router = require ("express").Router();

const {
    createUser,
    deleteUser,
    updateUser,
    getUsers,
    userId,
    addFriends,
    removeFriends
} = require("../../controllers/userController");

Router.route('/').get(getUsers).post(createUser);

Router.route("/:userId").get(userId).put(updateUser).delete(deleteUser);

Router.route('/:userId/friends/:friendId').post(addFriends);

Router.route('/:userId/friends/:friendId').delete(removeFriends);

module.exports = router;
