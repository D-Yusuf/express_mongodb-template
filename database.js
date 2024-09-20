const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (err) {
        console.log("Error connecting with database", err)
    }

}

module.exports = connectDB