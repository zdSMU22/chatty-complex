const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/module18-challenge', {
//     useNewUrlParser: true,
//     useUnifiedTopolgy: true
// });

// mongoose.set('debug', true);

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
//   });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log (`App running on port ${PORT}!`);
    });
});