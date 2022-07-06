const {User, Thoughts} = require("../models");

const thoughtController ={

    CreateThoughts ({body}, res) {
        Thoughts.create(body)
        .then((ThoughtData) => {
            return User.findOneAndUpdate(
                {
                    _id:body.UserId
                },
                {
                    $addToSet: {
                        thoughts: ThoughtData._id
                    }
                },
                {new: true}
            );
        })

        .then(dbUserData =>{
            if (!dbUserData){
                res.status(404).json({message: "User not found"});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json(err);
        });
    },

    DeleteThoughts({params}, res){
        Thoughts.findOneAndUpdate({_id: params.ThoughtsId})
        .then(DeletedThoughts => {
            if (!DeletedThoughts) {
                res.status(404).json({ message: ' Thought not found' });
                return;
        }
        return User.findOneAndUpdate({
            _id: params.thoughtId
        },
        {
            $pull: {
                thoughts: params.thoughtId
            }
        },
        {
            new: true
        });
    })
         .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json();
                return;
            }

            res.json(dbUserData);
         })
         .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    UpdateThoughts({params, body}, res){
        Thoughts.findOneAndUpdate({_id: params.ThoughtsId},
        {
            $set: body
        },
        {
            new: true,
            runValidators: true,
        })
        .then(UpdateToThoughts => {
            if (!UpdateToThoughts) {
                res.status(404).json({ message: ' Thought not found' });
                return;
        }
    })
         .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    GetThoughts (req, res) {
        Thoughts.find ({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    ThoughtsId ({params}, res) {
        Thoughts.findOne({_id: params.ThoughtsId})
        .select("-__v")
        .sort({_id: -1})
        .then(dbThoughtData =>{
            if (!dbThoughtData){
                res.status(404).json({message: "Thought not found"});
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json(err);
        });
    },

    AddReactions({ params, body }, res) {
        Thought.findOneAndUpdate({_id: params.thoughtId},
        {
            $push: {
                reactions: body
            }
        },
        {
            new: true,
            runValidators: true
        })
        .then(updatedThought => {
            if (!updatedThought) {
                res.status(404).json({ message: 'No reaction found' });
                return;
            }

            res.json(updatedThought);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    RemoveReaction({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId},
        {
            $pull : {
                reactions: {
                    reactionId: params.reactionId
                }
            }
        },
        {
            new: true
        })
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No reaction found' });
                return;
            }

            res.json(thought);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};

module.exports = thoughtController;