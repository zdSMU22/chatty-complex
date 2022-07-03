const {Schema, model} = require ('mogoose');

const userSchema = new Schema(
    {
        username:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (validate) {
                    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(validate);
                    return;
                   },
   
                   message: props => `${props.value} is not a valid email.`
            },
        },

        thoughts: [{
            type: Schema.types.ObjectId,
            ref: "Thought"
        }],

        friends: [{
            type: Schema.types.ObjectId,
            ref: "User"
        }],
    },
    {
        toJson: {
            getters: true,
            virtuals: true
        },

        id:false
    }
);

userSchema.virtual('friendCount').get(function (){
    return this.friend.length;
});

const User = model('User', userSchema);
model.exports = User