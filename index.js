let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");

let app = express(); // Initialise the app
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/db_v2', { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection Success");
});

app.use('/api', apiRoutes);
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});