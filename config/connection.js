const mongoose =  require ('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/module18-challenge', {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
});

module.exports = mongoose.connection;