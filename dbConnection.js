const mongoose = require("mongoose");

let connection;

const createConnection = async () => {
    connection = connection ?? (await mongoose.connect(process.env.MONGODB_ID));
    return connection;
}

module.exports = createConnection;