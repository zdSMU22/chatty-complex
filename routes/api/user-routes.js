const routes = require ("express").Router();

const {
    CreateUser,
    DeleteUser,
    UpdateUser,
    GetUsers,
    UserId,
    AddFriends,
    RemoveFriends
} = require("../../controllers/thoughtController");

Router
.route('/')
.get(GetUsers)
.post(CreateUser);

Router
.route("/")
.get(UserId)
.put(UpdateUser)
.delete(DeleteUser);

Router
.route('/:userId/friends/:friendId')
.post(AddFriends);

Router
.route('/:userId/friends/:friendId')
.delete(RemoveFriends);

module.exports = routes;
