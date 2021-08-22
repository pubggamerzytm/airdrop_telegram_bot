const mongoose = require('mongoose');

const userName = "premium";
const password = "^Za2<4$GGX6z!Q5";
const database = "newuserrrr";
const port = ".mongodb.net/";
const host = "@cluster0-lg7dq";

const dbUrl = "mongodb+srv://" + userName + ":" + password + host + port + database + "?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {})
    .catch(err => console.log("Could not connect", err));
// In order to remove deprecated warning collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Connexion à la base OK ");
});

module.exports = db;
